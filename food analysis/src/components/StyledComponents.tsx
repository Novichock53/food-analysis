import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  animation: fadeIn 0.8s ease-out;

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
`;

export const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  animation: slideDown 0.6s ease-out;

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
`;

export const BubbleSelect = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  animation: fadeInLeft 0.6s ease-out;
`;

export const Bubble = styled.div<{ active?: boolean }>`
  padding: 8px 20px;
  border: 2px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  background: ${props => props.active ? 
    'linear-gradient(135deg, #E4E7EB 0%, #CBD2D9 100%)' : 
    'linear-gradient(135deg, #F5F7FA 0%, #E4E7EB 100%)'};
  color: ${props => props.active ? '#2D3748' : '#4A5568'};
  transform: ${props => props.active ? 'scale(1.05)' : 'scale(1)'};
  border-color: ${props => props.active ? '#CBD2D9' : '#ddd'};
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  animation: fadeInRight 0.6s ease-out;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s;
  background: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52,152,219,0.2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s;
  background: #f8f9fa;
  height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52,152,219,0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #F5F7FA 0%, #E4E7EB 100%);
  color: #4A5568;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
  letter-spacing: 1px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    background: linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 100%);
  }
`;

export const Result = styled.div<{ visible: boolean }>`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  display: ${props => props.visible ? 'block' : 'none'};
  animation: expandUp 0.6s ease-out;

  @keyframes expandUp {
    from {
      opacity: 0;
      transform: scaleY(0);
      transform-origin: top;
    }
    to {
      opacity: 1;
      transform: scaleY(1);
      transform-origin: top;
    }
  }
`;
