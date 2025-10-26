export type StyleMap = Record<string, string>;

export const STYLES: Record<string, { name: string; styles: StyleMap }> = {
  'wechat-default': {
    name: '公众号（默认）',
    styles: {
      container: 'max-width: 740px; margin: 0 auto; padding: 20px 12px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; line-height: 1.8 !important; color: #3f3f3f !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 24px; font-weight: 600; color: #2c3e50 !important; line-height: 1.4 !important; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 2px solid #3498db;',
      h2: 'font-size: 22px; font-weight: 600; color: #2c3e50 !important; line-height: 1.4 !important; margin: 28px 0 14px; padding-left: 12px; border-left: 4px solid #3498db;',
      h3: 'font-size: 20px; font-weight: 600; color: #34495e !important; line-height: 1.4 !important; margin: 24px 0 12px;',
      p: 'margin: 16px 0 !important; line-height: 1.8 !important; color: #3f3f3f !important;',
      strong: 'font-weight: 600; color: #2c3e50 !important;',
      em: 'font-style: italic; color: #555 !important;',
      a: 'color: #3498db !important; text-decoration: none; border-bottom: 1px solid #3498db;',
      ul: 'margin: 16px 0; padding-left: 24px;',
      ol: 'margin: 16px 0; padding-left: 24px;',
      li: 'margin: 8px 0; line-height: 1.8 !important;',
      blockquote: 'margin: 16px 0; padding: 10px 16px; background-color: #fafafa !important; border-left: 3px solid #999; color: #666 !important; line-height: 1.6 !important;',
      code: 'font-family: Consolas, Monaco, "Courier New", monospace; font-size: 14px; padding: 2px 6px; background-color: #f5f5f5 !important; color: #e74c3c !important; border-radius: 3px;',
      pre: 'margin: 20px 0; padding: 16px; background-color: #2d2d2d !important; border-radius: 8px; overflow-x: auto; line-height: 1.6 !important;',
      hr: 'margin: 32px 0; border: none; border-top: 1px solid #e0e0e0;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 20px auto; border-radius: 8px;',
      table: 'width: 100%; margin: 20px 0; border-collapse: collapse; font-size: 15px;',
      th: 'background-color: #f0f0f0 !important; padding: 10px; text-align: left; border: 1px solid #e0e0e0; font-weight: 600;',
      td: 'padding: 10px; border: 1px solid #e0e0e0;',
      tr: 'border-bottom: 1px solid #e0e0e0;'
    }
  }
};

