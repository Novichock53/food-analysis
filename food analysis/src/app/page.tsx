'use client';

import { useState } from 'react';
import {
  Container,
  Title,
  BubbleSelect,
  Bubble,
  InputGroup,
  Label,
  Input,
  TextArea,
  Button,
  Result
} from '@/components/StyledComponents';

export default function Home() {
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [foodDiary, setFoodDiary] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeDiet = async () => {
    setLoading(true);
    // 这里可以添加实际的分析逻辑
    setTimeout(() => {
      setResult('基于您的身高、体重和饮食记录，我们建议...');
      setLoading(false);
    }, 2000);
  };

  return (
    <main style={{ 
      padding: '20px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 50%, #ffffff 100%)'
    }}>
      <Container>
        <Title>饮食分析助手</Title>
        
        <InputGroup>
          <Label>性别</Label>
          <BubbleSelect>
            <Bubble 
              active={gender === 'male'}
              onClick={() => setGender('male')}
            >
              男性
            </Bubble>
            <Bubble 
              active={gender === 'female'}
              onClick={() => setGender('female')}
            >
              女性
            </Bubble>
          </BubbleSelect>
        </InputGroup>

        <InputGroup>
          <Label>身高 (cm)</Label>
          <Input 
            type="number" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="请输入身高"
          />
        </InputGroup>

        <InputGroup>
          <Label>体重 (kg)</Label>
          <Input 
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="请输入体重"
          />
        </InputGroup>

        <InputGroup>
          <Label>今日饮食记录</Label>
          <TextArea 
            value={foodDiary}
            onChange={(e) => setFoodDiary(e.target.value)}
            placeholder="请详细记录您今天的饮食情况..."
          />
        </InputGroup>

        <Button onClick={analyzeDiet}>
          {loading ? '分析中...' : '开始分析'}
        </Button>

        <Result visible={!!result}>
          {result}
        </Result>
      </Container>
    </main>
  );
}
