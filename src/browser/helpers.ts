import { Request } from 'express';
import type { Page } from 'puppeteer';
import { glob } from 'glob';
import { PreviewReqBody, PreviewReqQuery } from '../common/types';
import config from '../common/config';

export const SANITIZE_FILEPATH = /^(\.\.(\/|\\|$))+/;
export const SANITIZE_REGEX =
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

export const replaceString = (string: string) => {
  return string.replace(/[-[\]{}()'`*+?.,\\^$|#]/g, '\\$&');
};

export const sanitizeFilepath = (input: string) => {
  return input.replace(SANITIZE_FILEPATH, '');
};

export const sanitizeHTTP = (input: string) => {
  return input.replace(SANITIZE_REGEX, '');
};

export const toServiceName = (input: string) => {
  const sanitizedInput = sanitizeHTTP(input);
  return ServiceNames[sanitizedInput as keyof typeof ServiceNames];
};

export const sanitizeTemplateConfig = (templateConfig: {
  service: ServiceNames;
  template: string;
}): {
  service: ServiceNames;
  template: string;
} => {
  return {
    service: toServiceName(templateConfig.service),
    template: sanitizeHTTP(templateConfig.template),
  };
};

export const MaxWorkers = 4;

export const processOrientationOption = (
  request: Request<unknown, unknown, PreviewReqBody, PreviewReqQuery>
) => {
  let orientationOption = '';
  if (request.query?.orientation) {
    orientationOption = request.query?.orientation;
  } else if (request.body?.orientation) {
    orientationOption = request.body?.orientation;
  }

  if (orientationOption === 'landscape') {
    return true;
  }

  return undefined;
};

export const margins = {
  top: '2cm',
  bottom: '2cm',
  right: '1cm',
  left: '1cm',
};

function getChromiumExecutablePath() {
  const paths = glob.sync(
    '/root/.cache/puppeteer/chrome/*/chrome-linux64/chrome'
  );
  if (paths.length > 0) {
    return paths[0];
  } else {
    throw new Error('unable to locate chromium executable');
  }
}

export const CHROMIUM_PATH = config?.IS_PRODUCTION
  ? getChromiumExecutablePath()
  : undefined;

const A4Width = 210;
const A4Height = 297;

// Get margin off and make it bigger resolution
export const pageWidth = (A4Height - 20) * 4;
export const pageHeight = (A4Width - 40) * 4;

export const setWindowProperty = (page: Page, name: string, value: string) =>
  page.evaluateOnNewDocument(`
    Object.defineProperty(window, '${name}', {
      get() {
        return '${replaceString(value)}'
      }
    })
  `);

type PdfStatus = {
  [statusID: string]: {
    status: string;
    filepath: string;
  };
};

type PdfEntry = {
  status: string;
  filepath: string;
};

class PdfCache {
  private static instance: PdfCache;
  private data: PdfStatus;

  private constructor() {
    this.data = {};
  }

  public static getInstance(): PdfCache {
    if (!PdfCache.instance) {
      PdfCache.instance = new PdfCache();
    }
    return PdfCache.instance;
  }

  public setItem(id: string, status: PdfEntry): void {
    this.data[id] = { ...status };
  }

  public getItem(id: string): PdfEntry {
    return this.data[id];
  }

  public deleteItem(id: string) {
    delete this.data[id];
  }
}

export default PdfCache;
