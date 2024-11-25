import { useEffect } from 'react';
import Head from 'next/head';

// 确保文件位于正确的 pages 目录下
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 检查页面加载状态
    console.log('页面加载状态:', document.readyState);
    // 检查路由信息
    console.log('当前路径:', window.location.pathname);
    
    document.body.style.opacity = '1';
  }, []);

  // 添加错误边界处理
  if (pageProps.error) {
    return (
      <div>
        <h1>出错了!</h1>
        <p>{pageProps.error.message}</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>饮食分析助手</title>
      </Head>

      <style jsx global>{`
        body {
          font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
          margin: 0;
          padding: 20px;
          background: linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 50%, #ffffff 100%);
          color: #333;
          min-height: 100vh;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        h1 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 30px;
          animation: slideDown 0.6s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}

// 添加getInitialProps以处理服务端错误
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  // 捕获并处理404错误
  if (appContext.ctx.res && appContext.ctx.res.statusCode === 404) {
    return {
      ...appProps,
      pageProps: {
        ...appProps.pageProps,
        error: { message: '页面未找到' }
      }
    };
  }

  return appProps;
};

export default MyApp;


