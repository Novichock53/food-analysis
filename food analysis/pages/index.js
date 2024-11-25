// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [occasion, setOccasion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xai-VT8QNrZXAMqx9WFKTtqCOnb9yJId5fi2wuw0t3dRbQQDNFkAEWRC99h7EOX0AzF5cEbu0xh8pfnIpbJt'
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are a fashion advisor."
            },
            {
              role: "user", 
              content: `请为一位${gender === 'male' ? '男性' : gender === 'female' ? '女性' : '其他性别'}用户提供${occasion}的穿搭建议。用户生日是${birthday}。`
            }
          ],
          model: "grok-beta",
          stream: false,
          temperature: 0.7
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || '请求失败');
      }
      setResult(data.choices[0].message.content);
    } catch (error) {
      setResult('抱歉，获取建议时出现错误，请稍后重试。');
      console.error('Error:', error);
    }

    setLoading(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>个性化穿搭顾问</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>个性化穿搭顾问</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>性别</label>
            <select 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">请选择</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>生日</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>出席场合</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">请选择</option>
              <option value="formal">正式场合</option>
              <option value="casual">日常休闲</option>
              <option value="party">派对聚会</option>
              <option value="dating">约会</option>
              <option value="business">商务场合</option>
            </select>
          </div>

          <button type="submit" className={styles.button}>
            获取穿搭建议
          </button>
        </form>

        {loading && (
          <div className={styles.loading}>正在为您生成专属穿搭方案...</div>
        )}

        {result && (
          <div className={styles.result}>
            <h3>您的专属穿搭建议</h3>
            <p>{result}</p>
          </div>
        )}
      </main>
    </div>
  );
}
