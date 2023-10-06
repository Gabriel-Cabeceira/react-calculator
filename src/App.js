/*jsx - Configurações gerais da aplicação
Aqui é montado a virtual DOM da aplicação
*/

import { Container, Content, Row } from './styles'
import Input from './components/Input/input-index.js'
import Button from './components/Button/button-index.js'
import { useState } from 'react'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [memory, setMemory] = useState('0');
  const[operator, setOperator] = useState(null);

  const handleAddNumber = (number) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleClearScreen = () => {
    setCurrentNumber('0');
    setMemory('0');
    setOperator(null);
  }

  const handleOperator = (newOperator) => {
    setMemory(currentNumber);
    setCurrentNumber('0');
    setOperator(newOperator)
  }

  const handleEquals = () => {
    
    switch (operator) {
      case '+':
        setCurrentNumber(Number(memory) + Number(currentNumber));
        break;
      case '-':
        setCurrentNumber(Number(memory) - Number(currentNumber));
        break;
      case 'x':
        setCurrentNumber(Number(memory) * Number(currentNumber));
        break;
      case '/':
        setCurrentNumber(Number(memory) / Number(currentNumber));
        break;
      default:
        console.log('error');
    }
  }

  const handlePercent = () => {
    setCurrentNumber(currentNumber / 100);
  }

  const handleNegative = () => {
    if (currentNumber > 0){
      setCurrentNumber(currentNumber - (currentNumber * 2));
    }else if(currentNumber < 0){
      setCurrentNumber(currentNumber + (currentNumber * -2));
    }else {
      setCurrentNumber('Error');
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>
        <Row>
          <Button label="C" className="other-controls" onClick={handleClearScreen}></Button>
          <Button label="+/-" className="other-controls" onClick={handleNegative}></Button>
          <Button label="%" className="other-controls" onClick={handlePercent}></Button>
          <Button label="/" className="operators" onClick={() => handleOperator('/')}></Button>
        </Row>

        <Row>
          <Button label="7" className="digits" onClick={() => handleAddNumber('7')}></Button>
          <Button label="8" className="digits" onClick={() => handleAddNumber('8')}></Button>
          <Button label="9" className="digits" onClick={() => handleAddNumber('9')}></Button>
          <Button label="x" className="operators" onClick={() => handleOperator('x')}></Button>
        </Row>

        <Row>
          <Button label="4" className="digits" onClick={() => handleAddNumber('4')}></Button>
          <Button label="5" className="digits" onClick={() => handleAddNumber('5')}></Button>
          <Button label="6" className="digits" onClick={() => handleAddNumber('6')}></Button>
          <Button label="-" className="operators" onClick={() => handleOperator('-')}></Button>
        </Row>

        <Row>
          <Button label="1" className="digits" onClick={() => handleAddNumber('1')}></Button>
          <Button label="2" className="digits" onClick={() => handleAddNumber('2')}></Button>
          <Button label="3" className="digits" onClick={() => handleAddNumber('3')}></Button>
          <Button label="+" className="operators" onClick={() => handleOperator('+')}></Button>
        </Row>

        <Row>
          <Button label="0" className="zero-button digits" onClick={() => handleAddNumber('0')}></Button>
          <Button label="," className="digits" onClick={() => handleAddNumber('.')}></Button>
          <Button label="=" className="operators" onClick={handleEquals}></Button>
        </Row>

      </Content>
    </Container>
  );
}

export default App;
