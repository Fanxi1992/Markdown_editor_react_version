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
  },
  'wechat-nyt': {
    name: '纽约时报',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 40px 16px; font-family: Georgia, "Times New Roman", serif; font-size: 18px; line-height: 1.8 !important; color: #1a1a1a !important; background-color: #ffffff !important;',
      h1: 'font-size: 40px; font-weight: 700; color: #000 !important; line-height: 1.25 !important; margin: 48px 0 24px; letter-spacing: -0.01em;',
      h2: 'font-size: 28px; font-weight: 700; color: #111 !important; line-height: 1.35 !important; margin: 32px 0 18px;',
      h3: 'font-size: 22px; font-weight: 700; color: #222 !important; line-height: 1.45 !important; margin: 24px 0 14px;',
      p: 'margin: 18px 0 !important; line-height: 1.9 !important; color: #1a1a1a !important; text-align: justify;',
      blockquote: 'margin: 24px 0; padding: 12px 16px; border-left: 4px solid #111; background-color: #f7f7f7 !important; color: #222 !important;',
      code: 'font-family: Menlo, Monaco, Consolas, monospace; font-size: 14px; padding: 2px 6px; background-color: #f5f5f5 !important; color: #c7254e !important; border-radius: 3px;',
      pre: 'margin: 24px 0; padding: 18px; background-color: #222 !important; color: #f5f5f5 !important; border-radius: 6px; overflow-x: auto; line-height: 1.6 !important;',
      hr: 'margin: 40px 0; border: none; height: 1px; background-color: #e0e0e0 !important;',
      img: 'max-width: 100%; height: auto; display: block; margin: 20px auto; border-radius: 4px;',
      a: 'color: #111 !important; text-decoration: underline;',
      ul: 'margin: 16px 0; padding-left: 24px;',
      ol: 'margin: 16px 0; padding-left: 24px;',
      li: 'margin: 8px 0;'
    }
  },
  'wechat-ft': {
    name: 'FT 中文',
    styles: {
      container: 'max-width: 720px; margin: 0 auto; padding: 40px 16px; font-family: Georgia, "Times New Roman", serif; font-size: 18px; line-height: 1.8 !important; color: #222 !important; background-color: #fff !important;',
      h1: 'font-size: 36px; font-weight: 700; color: #000 !important; line-height: 1.25 !important; margin: 48px 0 20px; border-bottom: 4px solid #f2c3a2; padding-bottom: 10px;',
      h2: 'font-size: 26px; font-weight: 700; color: #111 !important; line-height: 1.35 !important; margin: 32px 0 16px; border-left: 6px solid #f2c3a2; padding-left: 12px;',
      h3: 'font-size: 20px; font-weight: 600; color: #222 !important; line-height: 1.45 !important; margin: 24px 0 12px;',
      p: 'margin: 18px 0 !important; line-height: 1.9 !important; color: #222 !important; text-align: justify;',
      blockquote: 'margin: 24px 0; padding: 16px; background-color: #f7efe9 !important; border-left: 4px solid #f2c3a2; color: #222 !important;',
      img: 'max-width: 100%; height: auto; display: block; margin: 20px auto; border-radius: 4px;',
      code: 'font-family: Menlo, Monaco, Consolas, monospace; font-size: 14px; padding: 2px 6px; background-color: #f5f5f5 !important; color: #c7254e !important; border-radius: 3px;',
      pre: 'margin: 24px 0; padding: 18px; background-color: #333 !important; color: #f5f5f5 !important; border-radius: 6px; overflow-x: auto;',
      a: 'color: #b36b00 !important; text-decoration: none; border-bottom: 1px solid #b36b00;',
      ul: 'margin: 16px 0; padding-left: 24px;',
      ol: 'margin: 16px 0; padding-left: 24px;',
      li: 'margin: 8px 0;'
    }
  },
  'nikkei': {
    name: '日经风格',
    styles: {
      container: 'max-width: 720px; margin: 0 auto; padding: 40px 16px; font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans GB", "Noto Sans CJK SC", Arial, sans-serif; font-size: 17px; line-height: 1.9 !important; color: #1a1a1a !important; background-color: #ffffff !important;',
      h1: 'font-size: 32px; font-weight: 700; color: #1a1a1a !important; line-height: 1.3 !important; margin: 40px 0 18px; border-bottom: 3px solid #00589b; padding-bottom: 8px;',
      h2: 'font-size: 24px; font-weight: 600; color: #1a1a1a !important; line-height: 1.4 !important; margin: 28px 0 14px; padding-left: 10px; border-left: 4px solid #00589b;',
      h3: 'font-size: 19px; font-weight: 600; color: #1a1a1a !important; line-height: 1.45 !important; margin: 22px 0 10px;',
      p: 'margin: 18px 0 !important; line-height: 1.9 !important; color: #1a1a1a !important; text-align: justify;',
      a: 'color: #00589b !important; text-decoration: none; border-bottom: 1px solid #00589b;',
      code: 'font-family: Menlo, Monaco, Consolas, monospace; font-size: 14px; padding: 2px 6px; background-color: #f5f5f5 !important; color: #c7254e !important; border-radius: 3px;',
      pre: 'margin: 24px 0; padding: 18px; background-color: #002b4c !important; color: #e8f1f9 !important; border-radius: 6px; overflow-x: auto;',
      img: 'max-width: 100%; height: auto; display: block; margin: 20px auto; border-radius: 4px;'
    }
  },
  'wired': {
    name: 'Wired',
    styles: {
      container: 'max-width: 740px; margin: 0 auto; padding: 24px 14px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; font-size: 16px; line-height: 1.8 !important; color: #111 !important; background-color: #ffffff !important;',
      h1: 'font-size: 34px; font-weight: 800; color: #111 !important; line-height: 1.25 !important; margin: 42px 0 18px; letter-spacing: -0.02em;',
      h2: 'font-size: 24px; font-weight: 700; color: #111 !important; line-height: 1.35 !important; margin: 30px 0 14px; border-left: 6px solid #ff0066; padding-left: 10px;',
      h3: 'font-size: 18px; font-weight: 700; color: #111 !important; line-height: 1.45 !important; margin: 22px 0 12px;',
      p: 'margin: 16px 0 !important; line-height: 1.85 !important; color: #111 !important;',
      a: 'color: #ff0066 !important; text-decoration: none; border-bottom: 1px solid #ff0066;',
      code: 'font-family: Menlo, Monaco, Consolas, monospace; font-size: 14px; padding: 2px 6px; background-color: #111 !important; color: #fff !important; border-radius: 3px;',
      pre: 'margin: 24px 0; padding: 18px; background: linear-gradient(135deg, #111 0%, #333 100%) !important; color: #f5f5f5 !important; border-radius: 8px; overflow-x: auto;'
    }
  },
  'ai-coder': {
    name: 'AI Coder',
    styles: {
      container: 'max-width: 760px; margin: 0 auto; padding: 24px 16px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; font-size: 16px; line-height: 1.8 !important; color: #222 !important; background-color: #fbfbfb !important;',
      h1: 'font-size: 30px; font-weight: 800; color: #111 !important; line-height: 1.25 !important; margin: 32px 0 16px; background: linear-gradient(90deg, #0ea5e9, #22c55e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
      h2: 'font-size: 22px; font-weight: 700; color: #111 !important; line-height: 1.35 !important; margin: 26px 0 12px; border-left: 6px solid #0ea5e9; padding-left: 10px;',
      p: 'margin: 14px 0 !important; line-height: 1.9 !important; color: #222 !important;',
      code: 'font-family: Menlo, Monaco, Consolas, monospace; font-size: 13px; padding: 2px 6px; background-color: #ecfeff !important; color: #0ea5e9 !important; border-radius: 4px; border: 1px solid #a5f3fc;',
      pre: 'margin: 20px 0; padding: 16px; background-color: #0b1220 !important; color: #e5e7eb !important; border-radius: 8px; overflow-x: auto; line-height: 1.6 !important; border: 1px solid #1f2937;'
    }
  },
  'jony-ive': {
    name: 'Jony Ive',
    styles: {
      container: 'max-width: 640px; margin: 0 auto; padding: 48px 16px; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Arial, sans-serif; font-size: 16px; line-height: 1.7 !important; color: #5f5f62 !important; background-color: #fbfbfd !important;',
      h1: 'font-size: 48px; font-weight: 600; color: #1d1d1f !important; line-height: 1.1 !important; margin: 48px 0 24px; letter-spacing: -0.015em;',
      h2: 'font-size: 30px; font-weight: 600; color: #1d1d1f !important; line-height: 1.2 !important; margin: 36px 0 18px; letter-spacing: -0.01em;',
      h3: 'font-size: 22px; font-weight: 600; color: #1d1d1f !important; line-height: 1.3 !important; margin: 28px 0 14px;',
      p: 'margin: 22px 0 !important; line-height: 1.75 !important; color: #5f5f62 !important;',
      blockquote: 'margin: 40px auto; padding: 0; background-color: transparent !important; border-left: none; color: #1d1d1f !important; font-size: 24px; line-height: 1.35 !important; font-weight: 600; text-align: center; max-width: 560px;'
    }
  },

  // From original Vue project: fuller Apple-like variant
  'wechat-jonyive': {
    name: 'Jony Ive（原版）',
    styles: {
      container: 'max-width: 620px; margin: 0 auto; padding: 80px 24px; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.6 !important; color: #6e6e73 !important; background-color: #fbfbfd !important; word-wrap: break-word;',
      h1: 'font-size: 56px; font-weight: 200; color: #1d1d1f !important; line-height: 1.05 !important; margin: 96px 0 48px; letter-spacing: -0.03em;',
      h2: 'font-size: 40px; font-weight: 300; color: #1d1d1f !important; line-height: 1.1 !important; margin: 80px 0 40px; letter-spacing: -0.02em;',
      h3: 'font-size: 28px; font-weight: 400; color: #1d1d1f !important; line-height: 1.15 !important; margin: 64px 0 32px; letter-spacing: -0.01em;',
      h4: 'font-size: 21px; font-weight: 500; color: #1d1d1f !important; line-height: 1.2 !important; margin: 48px 0 24px;',
      h5: 'font-size: 19px; font-weight: 500; color: #1d1d1f !important; line-height: 1.25 !important; margin: 40px 0 20px;',
      h6: 'font-size: 17px; font-weight: 500; color: #1d1d1f !important; line-height: 1.3 !important; margin: 32px 0 16px;',
      p: 'margin: 32px 0 !important; line-height: 1.6 !important; color: #6e6e73 !important; font-weight: 300;',
      strong: 'font-weight: 500; color: #1d1d1f !important;',
      em: 'font-style: normal; color: #6e6e73 !important; font-weight: 300;',
      a: 'color: #06c !important; text-decoration: none; font-weight: 400;',
      ul: 'margin: 32px 0; padding-left: 32px; list-style-type: disc;',
      ol: 'margin: 32px 0; padding-left: 32px; list-style-type: decimal;',
      li: 'margin: 20px 0; line-height: 1.6 !important; color: #6e6e73 !important; padding-left: 32px; position: relative; font-weight: 300;',
      blockquote: 'margin: 64px auto; padding: 0; background-color: transparent !important; border-left: none; color: #1d1d1f !important; font-size: 28px; line-height: 1.3 !important; font-weight: 300; text-align: center; max-width: 520px; font-style: normal;',
      code: 'font-family: "SF Mono", Monaco, Menlo, monospace; font-size: 15px; padding: 2px 6px; background-color: #f5f5f7 !important; color: #6e6e73 !important; border-radius: 8px; font-weight: 400;',
      pre: 'margin: 48px 0; padding: 32px; background-color: #f5f5f7 !important; border-radius: 12px; overflow-x: auto; line-height: 1.5 !important;',
      hr: 'margin: 96px auto; border: none; height: 1px; background-color: #d2d2d7 !important; max-width: 64px;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 64px auto; border-radius: 12px;',
      table: 'width: 100%; margin: 48px 0; border-collapse: collapse; font-size: 15px;',
      th: 'background-color: #f5f5f7 !important; padding: 16px 20px; text-align: left; border: none; font-weight: 500; color: #1d1d1f !important;',
      td: 'padding: 16px 20px; border: none; border-top: 1px solid #d2d2d7; color: #6e6e73 !important; font-weight: 300;',
      tr: 'border: none;'
    }
  },

  // From original Vue project: editorial styles
  'hische-editorial': {
    name: 'Hische 编辑部',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 70px 20px; font-family: "Crimson Text", Garamond, serif; font-size: 19px; line-height: 1.75 !important; color: #2c2c2c !important; background-color: #fffef9 !important; word-wrap: break-word;',
      h1: 'font-size: 52px; font-weight: 400; color: #c9302c !important; line-height: 1.15 !important; margin: 70px 0 35px; letter-spacing: -0.03em; font-family: "Bodoni MT", "Didot", serif; text-align: center;',
      h2: 'font-size: 38px; font-weight: 400; color: #2c2c2c !important; line-height: 1.25 !important; margin: 60px 0 30px; letter-spacing: -0.02em; font-family: "Bodoni MT", "Didot", serif; border-top: 1px solid #c9302c; border-bottom: 1px solid #c9302c; padding: 15px 0; text-align: center;',
      h3: 'font-size: 30px; font-weight: 400; color: #2c2c2c !important; line-height: 1.35 !important; margin: 50px 0 25px; font-family: "Bodoni MT", "Didot", serif;',
      h4: 'font-size: 24px; font-weight: 600; color: #2c2c2c !important; line-height: 1.4 !important; margin: 40px 0 20px; text-transform: uppercase; letter-spacing: 0.05em; font-size: 18px;',
      h5: 'font-size: 20px; font-weight: 400; color: #2c2c2c !important; line-height: 1.45 !important; margin: 30px 0 15px; font-style: italic;',
      h6: 'font-size: 18px; font-weight: 400; color: #666 !important; line-height: 1.5 !important; margin: 25px 0 12px;',
      p: 'margin: 28px 0 !important; line-height: 1.75 !important; color: #2c2c2c !important; text-align: justify;',
      strong: 'font-weight: 700; color: #c9302c !important; letter-spacing: 0.02em;',
      em: 'font-style: italic; color: #2c2c2c !important;',
      a: 'color: #c9302c !important; text-decoration: none; border-bottom: 1px solid #c9302c;',
      ul: 'margin: 35px 0; padding-left: 25px; list-style: disc;',
      ol: 'margin: 35px 0; padding-left: 25px;',
      li: 'margin: 12px 0; line-height: 1.75 !important; color: #2c2c2c !important;',
      blockquote: 'margin: 45px 0; padding: 0 40px; background-color: transparent !important; border-left: none; color: #2c2c2c !important; font-size: 24px; line-height: 1.6 !important; font-style: italic; text-align: center; font-family: "Bodoni MT", "Didot", serif;',
      code: 'font-family: "Courier Prime", monospace; font-size: 17px; padding: 2px 6px; background-color: #f9f9f9 !important; color: #c9302c !important; border: 1px solid #e0e0e0;',
      pre: 'margin: 40px 0; padding: 30px; background-color: #f9f9f9 !important; border-left: 5px solid #c9302c; overflow-x: auto; line-height: 1.6 !important;',
      hr: 'margin: 70px auto; border: none; height: 1px; background-color: #c9302c !important; max-width: 100px;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 45px auto; border: 1px solid #e0e0e0;',
      table: 'width: 100%; margin: 40px 0; border-collapse: collapse; font-size: 17px;',
      th: 'background-color: #f9f9f9 !important; padding: 15px; text-align: left; border-top: 2px solid #c9302c; border-bottom: 2px solid #c9302c; font-weight: 700; color: #2c2c2c !important; text-transform: uppercase; letter-spacing: 0.05em; font-size: 14px;',
      td: 'padding: 15px; border-bottom: 1px solid #e0e0e0; color: #2c2c2c !important;',
      tr: 'border-bottom: 1px solid #e0e0e0;'
    }
  },

  'ando-concrete': {
    name: '安藤·清水混凝土',
    styles: {
      container: 'max-width: 600px; margin: 0 auto; padding: 60px 24px 80px 24px; font-family: "Helvetica Neue", Arial, sans-serif; font-size: 16px; line-height: 2 !important; color: #4a4a4a !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 28px; font-weight: 300; color: #1a1a1a !important; line-height: 1.5 !important; margin: 60px 0 50px; padding-bottom: 30px; border-bottom: 1px solid #d0d0d0; letter-spacing: 0.2em; text-transform: uppercase;',
      h2: 'font-size: 20px; font-weight: 400; color: #2a2a2a !important; line-height: 1.6 !important; margin: 70px 0 40px; padding: 20px 0; border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; letter-spacing: 0.15em; background-color: #fafafa !important;',
      h3: 'font-size: 17px; font-weight: 400; color: #3a3a3a !important; line-height: 1.7 !important; margin: 50px 0 30px; letter-spacing: 0.1em;',
      h4: 'font-size: 16px; font-weight: 500; color: #4a4a4a !important; line-height: 1.8 !important; margin: 50px 0 25px; letter-spacing: 0.05em;',
      h5: 'font-size: 15px; font-weight: 500; color: #5a5a5a !important; line-height: 1.8 !important; margin: 40px 0 20px;',
      h6: 'font-size: 14px; font-weight: 500; color: #6a6a6a !important; line-height: 1.8 !important; margin: 30px 0 15px;',
      p: 'margin: 35px 0 !important; line-height: 2 !important; color: #4a4a4a !important; text-align: justify;',
      strong: 'font-weight: 600; color: #1a1a1a !important; letter-spacing: 0.05em;',
      em: 'font-style: normal; color: #6a6a6a !important; letter-spacing: 0.05em; font-weight: 300;',
      a: 'color: #4a4a4a !important; text-decoration: none; border-bottom: 1px solid #b0b0b0; padding-bottom: 1px;',
      ul: 'margin: 50px 0; padding-left: 32px; list-style-type: circle;',
      ol: 'margin: 50px 0; padding-left: 32px; list-style-type: decimal;',
      li: 'margin: 25px 0; line-height: 2 !important; color: #4a4a4a !important; padding-left: 30px; position: relative;',
      blockquote: 'margin: 60px 0; padding: 35px; background-color: #ffffff !important; border: 1px solid #d0d0d0; color: #3a3a3a !important; font-size: 15px; line-height: 2.2 !important; letter-spacing: 0.05em; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);',
      code: 'font-family: "Courier New", Courier, monospace; font-size: 14px; padding: 3px 8px; background-color: #f0f0f0 !important; color: #4a4a4a !important; border: 1px solid #d0d0d0;',
      pre: 'margin: 60px 0; padding: 40px; background-color: #2a2a2a !important; color: #f0f0f0 !important; border: none; overflow-x: auto; line-height: 1.8 !important; box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);',
      hr: 'margin: 60px auto; border: none; width: 60px; height: 1px; background-color: #c0c0c0 !important;',
      img: 'max-width: 100%; max-height: 500px !important; height: auto; display: block; margin: 50px auto; filter: grayscale(20%); opacity: 0.95;',
      table: 'width: 100%; margin: 60px 0; border-collapse: collapse; font-size: 14px; border: 1px solid #d0d0d0;',
      th: 'background-color: #f8f8f8 !important; padding: 20px; text-align: left; border: 1px solid #d0d0d0; font-weight: 400; color: #2a2a2a !important; letter-spacing: 0.1em; text-transform: uppercase;',
      td: 'padding: 20px; border: 1px solid #e0e0e0; color: #4a4a4a !important; background-color: #fff !important;',
      tr: 'border: 1px solid #e0e0e0;'
    }
  },

  'gaudi-organic': {
    name: '高迪·有机',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 60px 24px; font-family: "Baskerville", "Georgia", serif; font-size: 18px; line-height: 1.8 !important; color: #3d2914 !important; background-color: #fff5e6 !important; word-wrap: break-word;',
      h1: 'font-size: 52px; font-weight: 700; color: #ff6b6b !important; background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4, #5b86e5, #a55eea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.2 !important; margin: 70px 0 35px; text-align: center; letter-spacing: -0.02em; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); position: relative; padding: 20px;',
      h2: 'font-size: 38px; font-weight: 600; color: #c0392b !important; line-height: 1.3 !important; margin: 60px 0 30px; text-align: center; position: relative; padding: 15px 30px; background: radial-gradient(ellipse at center, rgba(192, 57, 43, 0.08) 0%, transparent 70%); border-radius: 50% 20% / 10% 40%;',
      h3: 'font-size: 28px; font-weight: 600; color: #27ae60 !important; line-height: 1.4 !important; margin: 50px 0 25px; padding-left: 35px; position: relative; border-left: 5px wavy #27ae60;',
      h4: 'font-size: 22px; font-weight: 600; color: #2980b9 !important; line-height: 1.5 !important; margin: 40px 0 20px; padding: 10px 20px; background: linear-gradient(90deg, rgba(41, 128, 185, 0.1) 0%, transparent 50%); border-radius: 100px 0 100px 0;',
      h5: 'font-size: 19px; font-weight: 600; color: #8e44ad !important; line-height: 1.5 !important; margin: 30px 0 15px;',
      h6: 'font-size: 17px; font-weight: 600; color: #d35400 !important; line-height: 1.5 !important; margin: 25px 0 12px; font-style: italic;',
      p: 'margin: 30px 0 !important; line-height: 1.9 !important; color: #3d2914 !important; text-indent: 2em;',
      strong: 'font-weight: 700; color: #c0392b !important; background: linear-gradient(180deg, transparent 60%, rgba(192, 57, 43, 0.2) 60%); padding: 2px 4px;',
      em: 'font-style: italic; color: #27ae60 !important; font-weight: 500;',
      a: 'color: #2980b9 !important; text-decoration: none; border-bottom: 2px wavy #2980b9; position: relative;',
      ul: 'margin: 35px 0; padding-left: 32px; list-style-type: square;',
      ol: 'margin: 35px 0; padding-left: 32px; list-style-type: decimal;',
      li: 'margin: 20px 0; line-height: 1.8 !important; color: #3d2914 !important; padding-left: 45px; position: relative; padding: 15px 25px 15px 45px; background: linear-gradient(90deg, rgba(255, 193, 7, 0.1) 0%, transparent 30%); border-radius: 30px 60px 120px 30px / 120px 30px 60px 30px;',
      blockquote: 'margin: 50px auto; padding: 35px 40px; background: radial-gradient(circle at top left, rgba(255, 107, 107, 0.1) 0%, rgba(109, 207, 127, 0.1) 25%, rgba(78, 205, 196, 0.1) 50%, rgba(91, 134, 229, 0.1) 75%, rgba(165, 94, 234, 0.1) 100%); border: 3px solid transparent; border-image: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4, #5b86e5, #a55eea) 1; border-radius: 50% 20% / 10% 40%; color: #3d2914 !important; font-size: 20px; line-height: 1.8 !important; font-style: italic; text-align: center; max-width: 600px;',
      code: 'font-family: "Courier New", Courier, monospace; font-size: 16px; padding: 4px 10px; background: linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(255, 217, 61, 0.2)); color: #c0392b !important; border-radius: 50% / 30%; font-weight: 600;',
      pre: 'margin: 45px 0; padding: 35px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fda085 100%); color: #fff !important; border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%; overflow-x: auto; line-height: 1.6 !important; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); position: relative;',
      hr: 'margin: 70px auto; border: none; height: 30px; background: url("data:image/svg+xml,%3Csvg width=\'100\' height=\'30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,15 Q25,0 50,15 T100,15\' stroke=\'%23c0392b\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E") repeat-x center; background-size: 100px 30px; max-width: 300px;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 50px auto; border-radius: 12px; box-shadow: 0 10px 25px rgba(255, 193, 7, 0.15); border: 2px solid #ffd93d;',
      table: 'width: 100%; margin: 45px 0; border-collapse: separate; border-spacing: 5px; font-size: 16px;',
      th: 'background: linear-gradient(45deg, #ff6b6b 0%, #ffd93d 100%); color: #fff !important; padding: 18px; text-align: left; font-weight: 600; border-radius: 15px 15px 0 0; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);',
      td: 'padding: 15px; background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(109, 207, 127, 0.1) 100%); color: #3d2914 !important; border-radius: 10px;',
      tr: 'border: none;'
    }
  },

  'guardian': {
    name: 'Guardian',
    styles: {
      container: 'max-width: 700px; margin: 0 auto; padding: 40px 12px; font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; font-size: 17px; line-height: 1.6 !important; color: #121212 !important; background-color: #fff !important; word-wrap: break-word;',
      h1: 'font-size: 42px; font-weight: 700; color: #052962 !important; line-height: 1.15 !important; margin: 40px 0 20px; padding-bottom: 12px; border-bottom: 3px solid #052962;',
      h2: 'font-size: 32px; font-weight: 600; color: #052962 !important; line-height: 1.25 !important; margin: 35px 0 18px; padding-left: 16px; border-left: 5px solid #C70000; background-color: #f6f6f6 !important; padding: 12px 16px;',
      h3: 'font-size: 24px; font-weight: 600; color: #052962 !important; line-height: 1.3 !important; margin: 30px 0 15px; padding: 8px 12px; background-color: #FEC200 !important; display: inline-block;',
      h4: 'font-size: 20px; font-weight: 600; color: #052962 !important; line-height: 1.4 !important; margin: 25px 0 12px; border-left: 3px solid #0084C6; padding-left: 12px;',
      h5: 'font-size: 18px; font-weight: 500; color: #333 !important; line-height: 1.4 !important; margin: 20px 0 10px;',
      h6: 'font-size: 16px; font-weight: 500; color: #666 !important; line-height: 1.4 !important; margin: 18px 0 8px;',
      p: 'margin: 18px 0 !important; line-height: 1.7 !important; color: #121212 !important;',
      strong: 'font-weight: 700; color: #052962 !important; background-color: rgba(5, 41, 98, 0.05) !important; padding: 1px 4px;',
      em: 'font-style: italic; color: #333 !important;',
      a: 'color: #0084C6 !important; text-decoration: none; border-bottom: 1px solid #0084C6;',
      ul: 'margin: 20px 0; padding-left: 24px;',
      ol: 'margin: 20px 0; padding-left: 24px;',
      li: 'margin: 10px 0; line-height: 1.7 !important; color: #121212 !important;',
      blockquote: 'margin: 30px 0; padding: 20px 24px; background-color: #FEC200 !important; border-left: 4px solid #C70000; color: #052962 !important; font-size: 19px; line-height: 1.6 !important; font-weight: 500; position: relative;',
      code: 'font-family: "SF Mono", Consolas, monospace; font-size: 15px; padding: 3px 6px; background-color: #f6f6f6 !important; color: #C70000 !important; border-radius: 3px;',
      pre: 'margin: 25px 0; padding: 20px; background-color: #052962 !important; color: #fff !important; border-radius: 4px; overflow-x: auto; line-height: 1.5 !important;',
      hr: 'margin: 40px 0; border: none; height: 2px; background-color: #052962 !important;',
      img: 'max-width: 100%; max-height: 600px !important; height: auto; display: block; margin: 30px auto; border: 2px solid #052962;',
      table: 'width: 100%; margin: 25px 0; border-collapse: collapse; font-size: 16px;',
      th: 'background-color: #052962 !important; color: #fff !important; padding: 12px 15px; text-align: left; font-weight: 600; border: 1px solid #052962;',
      td: 'padding: 10px 15px; border: 1px solid #e0e0e0; color: #121212 !important;',
      tr: 'border-bottom: 1px solid #e0e0e0;'
    }
  }
};
