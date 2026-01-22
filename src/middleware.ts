import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();

  // Set charset for HTML responses
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('text/html') && !contentType.includes('charset')) {
    response.headers.set('content-type', 'text/html; charset=utf-8');
  }

  return response;
};
