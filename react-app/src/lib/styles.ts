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
  },
  'wechat-tech': {
    name: '技术风',
    styles: {
      container: 'max-width: 740px; margin: 0 auto; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; line-height: 1.75 !important; color: #2c3e50 !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 26px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 36px 0 18px; padding: 0 0 12px; border-bottom: 3px solid #0066cc;',
      h2: 'font-size: 22px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 32px 0 16px; padding-left: 16px; padding-top: 4px; padding-bottom: 4px; border-left: 5px solid #00a67d; background: linear-gradient(to right, #f0f9ff 0%, transparent 100%);',
      h3: 'font-size: 20px; font-weight: 600; color: #2c3e50 !important; line-height: 1.4 !important; margin: 28px 0 14px; padding-left: 12px; border-left: 3px solid #ff9800;',
      p: 'margin: 18px 0 !important; line-height: 1.8 !important; color: #3a3a3a !important;',
      code: 'font-family: "SF Mono", Consolas, Monaco, monospace; font-size: 14px; padding: 3px 6px; background-color: #f5f5f5 !important; color: #d73a49 !important; border-radius: 3px;',
      pre: 'margin: 24px 0; padding: 18px; background-color: #2a2a2a !important; color: #f5f5f5 !important; border-radius: 8px; overflow-x: auto; line-height: 1.6 !important;',
      a: 'color: #0066cc !important; text-decoration: none; border-bottom: 1px solid #0066cc;',
      ul: 'margin: 18px 0; padding-left: 28px;',
      ol: 'margin: 18px 0; padding-left: 28px;',
      li: 'margin: 10px 0; line-height: 1.8 !important;'
    }
  },
  'wechat-medium': {
    name: 'Medium 风',
    styles: {
      container: 'max-width: 680px; margin: 0 auto; padding: 48px 12px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 21px; line-height: 1.58 !important; color: #242424 !important; background-color: #fff !important; word-wrap: break-word; letter-spacing: -0.003em;',
      h1: 'font-size: 42px; font-weight: 700; color: #242424 !important; line-height: 1.15 !important; margin: 56px 0 24px; letter-spacing: -0.022em; font-family: Georgia, "Times New Roman", serif;',
      h2: 'font-size: 34px; font-weight: 700; color: #242424 !important; line-height: 1.2 !important; margin: 48px 0 20px; letter-spacing: -0.019em; font-family: Georgia, "Times New Roman", serif;',
      h3: 'font-size: 28px; font-weight: 700; color: #242424 !important; line-height: 1.25 !important; margin: 40px 0 16px; letter-spacing: -0.014em; font-family: Georgia, "Times New Roman", serif;',
      p: 'margin: 32px 0 !important; line-height: 1.58 !important; color: #242424 !important; font-size: 21px; letter-spacing: -0.003em;',
      blockquote: 'margin: 48px 0; padding: 0 32px; border-left: 3px solid #242424; color: #242424 !important; font-size: 24px; line-height: 1.48 !important; font-style: italic; font-family: Georgia, "Times New Roman", serif;',
      pre: 'margin: 40px 0; padding: 24px; background-color: #f7f7f7 !important; border-radius: 8px; overflow-x: auto; line-height: 1.5 !important;'
    }
  },
  'wechat-apple': {
    name: 'Apple 风',
    styles: {
      container: 'max-width: 640px; margin: 0 auto; padding: 48px 12px; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.6 !important; color: #86868b !important; background-color: #fbfbfd !important; word-wrap: break-word;',
      h1: 'font-size: 48px; font-weight: 600; color: #1d1d1f !important; line-height: 1.1 !important; margin: 48px 0 24px; letter-spacing: -0.015em;',
      h2: 'font-size: 36px; font-weight: 600; color: #1d1d1f !important; line-height: 1.15 !important; margin: 40px 0 20px; letter-spacing: -0.012em;',
      h3: 'font-size: 28px; font-weight: 600; color: #1d1d1f !important; line-height: 1.2 !important; margin: 32px 0 16px; letter-spacing: -0.009em;',
      p: 'margin: 24px 0 !important; line-height: 1.65 !important; color: #86868b !important; font-size: 17px;',
      blockquote: 'margin: 40px auto; padding: 0; background-color: transparent !important; border-left: none; color: #1d1d1f !important; font-size: 24px; line-height: 1.35 !important; font-weight: 600; text-align: center; max-width: 560px; font-style: normal;'
    }
  },
  'wechat-anthropic': {
    name: 'Claude',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 56px 24px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif; font-size: 18px; line-height: 1.7 !important; color: #2b2b2b !important; background-color: #faf9f7 !important; word-wrap: break-word; letter-spacing: -0.01em;',
      h1: 'font-size: 48px; font-weight: 600; color: #191919 !important; line-height: 1.15 !important; margin: 64px 0 32px; letter-spacing: -0.025em;',
      h2: 'font-size: 36px; font-weight: 600; color: #191919 !important; line-height: 1.25 !important; margin: 56px 0 28px; letter-spacing: -0.02em;',
      h3: 'font-size: 28px; font-weight: 600; color: #2b2b2b !important; line-height: 1.3 !important; margin: 48px 0 24px; letter-spacing: -0.015em;',
      p: 'margin: 32px 0 !important; line-height: 1.75 !important; color: #2b2b2b !important; font-size: 18px; letter-spacing: -0.005em;',
      code: 'font-family: "SF Mono", Consolas, Monaco, monospace; font-size: 16px; padding: 3px 8px; background-color: rgba(193,95,60, .08) !important; color: #C15F3C !important; border-radius: 8px; font-weight: 500; border: 1px solid rgba(193,95,60, .15);',
      pre: 'margin: 40px 0; padding: 28px; background: linear-gradient(135deg, #2b2b2b 0%, #3a3a3a 100%); color: #f5f5f5 !important; border-radius: 12px; overflow-x: auto; line-height: 1.6 !important;'
    }
  },
  'lemonde': {
    name: 'Le Monde',
    styles: {
      container: 'max-width: 680px; margin: 0 auto; padding: 60px 20px; font-family: Georgia, "Times New Roman", serif; font-size: 18px; line-height: 1.8 !important; color: #2c2c2c !important; background-color: #fffef9 !important; word-wrap: break-word;',
      h1: 'font-size: 48px; font-weight: 400; color: #1a1a1a !important; line-height: 1.2 !important; margin: 60px 0 30px; text-align: center; letter-spacing: -0.02em; font-family: "Didot", Georgia, serif; text-transform: uppercase;',
      h2: 'font-size: 36px; font-weight: 300; color: #2c2c2c !important; line-height: 1.3 !important; margin: 50px 0 25px; text-align: center; padding: 20px 0; border-top: 1px solid #2c2c2c; border-bottom: 1px solid #2c2c2c; font-style: italic;',
      p: 'margin: 24px 0 !important; line-height: 1.9 !important; color: #2c2c2c !important; text-align: justify; text-indent: 2em;'
    }
  },
  'latepost-depth': {
    name: 'LatePost 深度',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 40px 12px; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; font-size: 17px; line-height: 1.8 !important; color: #1a1a1a !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 32px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 48px 0 28px; padding-left: 20px; border-left: 6px solid #d32f2f; position: relative;',
      h2: 'font-size: 24px; font-weight: 600; color: #fff !important; line-height: 1.4 !important; margin: 40px 0 24px; padding: 16px 24px; background-color: #d32f2f !important; border-radius: 4px; position: relative;',
      h3: 'font-size: 20px; font-weight: 600; color: #d32f2f !important; line-height: 1.5 !important; margin: 35px 0 20px; padding-left: 16px; border-left: 4px solid #d32f2f; position: relative;',
      p: 'margin: 20px 0 !important; line-height: 1.9 !important; color: #1a1a1a !important;',
      pre: 'margin: 28px 0; padding: 20px; background-color: #2a2a2a !important; color: #f5f5f5 !important; border-radius: 6px; overflow-x: auto; line-height: 1.6 !important; border-left: 4px solid #d32f2f;'
    }
  }
};
