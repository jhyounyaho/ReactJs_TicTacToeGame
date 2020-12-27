# ReactJS로 TicTacToe Game 만들기
## 참고 ReactJS 자습서                                   
https://ko.reactjs.org/tutorial/tutorial.html                                  

## 알게 되는 ReactJS 지식 
### 1. class형 컴포넌트 vs 함수형 컴포넌트            
   state 관리           
   - class: state           
   - function: useState - Hook            
   render()           
   - class: 사용            
   - function: 미사용            
### 2. props를 통해 자식 컴포넌트에게 데이터 전달하기            
### 3. state 끌어올리기           
   - 부모 컴포넌트와의 동기화를 위한 부모 컴포넌트에서 상태 관리 (여기서 자식은 '제어되는 컴포넌트')                      
   - 각 컴포넌트에서 state 관리시 버그에 취약, 리팩토링 어려움                       
### 4. 불변성                       
   - 기존 배열을 수정하는 것이 아니라 spread 연산자, .slice(), concat() 연산자를 이용 하여 사본을 만들어준다.                      
   - 변화를 감지하기 위해 (렌더링 판단)           
### 5. 리스트를 렌더링 할 때 key 선택하기           
   - React가 무엇이 변했는지 체크하기 위해 동적인 리스트를 만들 때마다 적절한 키를 할당할 것을 강력 추천            
              
## 추가 구현 기능                                  
1. 이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시해주세요.                                  
2. 이동 목록에서 현재 선택된 아이템을 굵게 표시해주세요.                                  
3. 사각형들을 만들 때 하드코딩 대신에 두 개의 반복문을 사용하도록 Board를 다시 작성해주세요.                                  
4. 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요.                                  
                                  
## 결과화면
현재 선택된 아이템 굵게 표시                                  
![tictactoe_bold](https://user-images.githubusercontent.com/42309919/103171787-52697480-4892-11eb-9b8a-bb5acc9e3729.PNG)                                  
내림차순 정렬                                  
![tictactoe_reverse](https://user-images.githubusercontent.com/42309919/103171789-539aa180-4892-11eb-82af-ce51275eea81.PNG)                                  
