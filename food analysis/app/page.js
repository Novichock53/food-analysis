// 将此文件重命名为 page.js 并放在 app 目录下

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [diet, setDiet] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://api.xai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xai-YvOQR3l0QbolovVAt7ynCCtx26TWl0bizE9wY73LwC1ReiCp9N4mC2QEavQRYLV6l7c1RVRWI5HYc4vR'
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are a test assistant."
            },
            {
              role: "user",
              content: `请以幽默打趣的口吻分析以下信息并给出建议：
              性别：${gender === 'male' ? '男' : '女'}
              身高：${height}cm
              体重：${weight}kg
              今日饮食记录：${diet}
              
              请包含以下内容：
              1. BMI指数分析
              2. 当前饮食习惯分析
              3. 有趣的饮食建议
              4. 创意健康菜谱推荐`
            }
          ],
          model: "grok-beta",
          stream: false,
          temperature: 0
        })
      });

      const data = await response.json();
      setResult(data.choices[0].message.content);
    } catch (error) {
      setResult('抱歉，分析过程出现了问题，请稍后再试！');
    } finally {
      setLoading(false);
    }
  };

  const handleHistory = () => {
    router.push('/history');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f3ff] via-[#f0f8ff] to-white p-5">
      <div className="max-w-[600px] mx-auto bg-white p-8 rounded-xl shadow-lg animate-fadeIn">
        <h1 className="text-center text-[#2c3e50] mb-8 animate-slideDown">饮食分析助手</h1>
        
        <div className="flex justify-end mb-4">
          <button
            onClick={handleHistory}
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            历史记录
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">性别：</label>
            <select 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">身高 (cm)：</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">体重 (kg)：</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">今日饮食记录：</label>
            <textarea
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full p-2 border rounded h-32"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? '分析中...' : '开始分析'}
          </button>
        </form>

        {loading && (
          <div className="text-center mt-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        )}

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">🌟 智能分析结果</h3>
            <div className="whitespace-pre-line">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
}

