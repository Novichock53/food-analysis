


// 创建 Next.js 项目结构

// pages/_app.js
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp

// pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>饮食分析助手</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1>饮食分析助手</h1>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="foodInput">请输入您的饮食内容:</label>
              <textarea 
                id="foodInput"
                className={styles.textarea}
                rows="4"
                placeholder="例如:早餐吃了一个鸡蛋,一碗米饭..."
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="timeInput">用餐时间:</label>
              <input
                type="datetime-local" 
                id="timeInput"
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.button}>
              分析饮食
            </button>
          </form>

          <div className={styles.result}>
            <h2>分析结果</h2>
            <div className={styles.analysisCard}>
              <p>您的饮食分析将在这里显示...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// styles/Home.module.css
/*
.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  animation: fadeIn 0.8s ease-out;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 50%, #ffffff 100%);
  color: #333;
  min-height: 100vh;
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
*/

// package.json
/*
{
  "name": "diet-analysis-assistant",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}
*/

// 项目结构说明：
/*
diet-analysis-assistant/
  ├── pages/
  │   ├── _app.js
  │   └── index.js
  ├── styles/
  │   └── Home.module.css
  ├── public/
  │   └── (放置静态资源)
  └── package.json
*/


