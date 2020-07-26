
const x = 'x'
const o = 'o'

// True if it's X's turn, false if it's O's turn
let xturn

const macroBoard = document.getElementById('macroBoard')

const microBoardElems = document.querySelectorAll('[microBoard]')

const cellElements0 = document.querySelectorAll('[cell0]')

const cellElements1 = document.querySelectorAll('[cell1]')

const cellElements2 = document.querySelectorAll('[cell2]')

const cellElements3 = document.querySelectorAll('[cell3]')

const cellElements4 = document.querySelectorAll('[cell4]')

const cellElements5 = document.querySelectorAll('[cell5]')

const cellElements6 = document.querySelectorAll('[cell6]')

const cellElements7 = document.querySelectorAll('[cell7]')

const cellElements8 = document.querySelectorAll('[cell8]')

const mainMenu = document.getElementById('mainMenu')

const winningMessage = document.getElementById('restart')

const winningMessageText = document.querySelector('[message]')

const winning = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]

const playButton = document.getElementById('startButton')

const restartButton = document.getElementById('exitButton')

showMainMenu()

//startGame()

playButton.addEventListener('click', startGame)

restartButton.addEventListener('click', showMainMenu)

function showMainMenu(){
	winningMessage.classList.remove('show')
	mainMenu.classList.add('show')
}

function startGame(){
	xturn = true

	microBoardElems.forEach(microBoard => {
		microBoard.classList.remove(x)
		microBoard.classList.remove(o)
		microBoard.classList.remove('draw')
	})

	cellElements0.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements1.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements2.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements3.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements4.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements5.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements6.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements7.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	cellElements8.forEach(cell => {
		cell.classList.remove(x)
		cell.classList.remove(o)
		cell.addEventListener('click', handleClick, { once: true })
	})

	setHover()
	mainMenu.classList.remove('show')
}

function handleClick(e){

	const curCell = e.target
	const curMark = getCurMark()
	let flag = false
	if ( !microBoardElems[curCell.id].classList.contains(x) && !microBoardElems[curCell.id].classList.contains(o) && !microBoardElems[curCell.id].classList.contains('draw')){
		placeMark(curCell, curMark)
		flag = true
	}

	if (checkMicroWin(curCell,curMark)){
		switch(curCell.id){
			case '0':
				cellElements0.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '1':
				cellElements1.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '2':
				cellElements2.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '3':
				cellElements3.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '4':
				cellElements4.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '5':
				cellElements5.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '6':
				cellElements6.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '7':
				cellElements7.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
			break;
			case '8':
				cellElements8.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
		}
		microBoardElems[curCell.id].classList.add(curMark)
	}


	if (checkMicroDraw(curCell)){
		switch(curCell.id){
			case '0':
				cellElements0.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '1':
				cellElements1.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '2':
				cellElements2.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '3':
				cellElements3.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '4':
				cellElements4.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '5':
				cellElements5.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '6':
				cellElements6.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '7':
				cellElements7.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
			case '8':
				cellElements8.forEach(cell => {
					cell.classList.remove(x);
					cell.classList.remove(o);
				})
				break;
		}
		microBoardElems[curCell.id].classList.add('draw')
	}


	if (checkMacroWin(curMark)){
		if (curMark == x){
			winningMessageText.innerText = 'X wins'
		}
		else{
			winningMessageText.innerText = 'O wins'
		}
		winningMessage.classList.add('show')
	}

	if (checkMacroDraw()){
		winningMessageText.innerText = 'Draw'
		winningMessage.classList.add('show')
	}

	if (flag){
		switchTurns()
	}
	setHover()
}

function getCurMark(){
	if (xturn) {
		return x
	}
	else{
		return o
	}
}

function placeMark(curCell, curMark){
	 curCell.classList.add(curMark)
}

function switchTurns(){
	xturn = !xturn
}

function setHover(){
	microBoardElems.forEach(board => {
		board.classList.remove('xHover')
		board.classList.remove('oHover')
	})

	if (xturn) {
		microBoardElems.forEach(board => {
			if ( !board.classList.contains(x) && !board.classList.contains(o) && !board.classList.contains('draw')){
				board.classList.add('xHover')
			}
		})
	}
	else{
		microBoardElems.forEach(board => {
			if ( !board.classList.contains(x) && !board.classList.contains(o) ){
				board.classList.add('oHover')
			}
		})
	}
}

function checkMicroWin(curCell,curMark){
	return winning.some(combinations => {
		return combinations.every(i => {
			switch(curCell.id){
				case '0':
					return cellElements0[i].classList.contains(curMark);
					break;
				case '1':
					return cellElements1[i].classList.contains(curMark);
					break;
				case '2':
					return cellElements2[i].classList.contains(curMark);
					break;
				case '3':
					return cellElements3[i].classList.contains(curMark);
					break;
				case '4':
					return cellElements4[i].classList.contains(curMark);
					break;
				case '5':
					return cellElements5[i].classList.contains(curMark);
					break;
				case '6':
					return cellElements6[i].classList.contains(curMark);
					break;
				case '7':
					return cellElements7[i].classList.contains(curMark);
					break;
				case '8':
					return cellElements8[i].classList.contains(curMark);
					break;
			}
		})
	})
}

function checkMicroDraw(curCell){
	switch(curCell.id){
		case '0':
			return [...cellElements0].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '1':
			return [...cellElements1].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '2':
			return [...cellElements2].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '3':
			return [...cellElements3].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '4':
			return [...cellElements4].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '5':
			return [...cellElements5].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '6':
			return [...cellElements6].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '7':
			return [...cellElements7].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;
		case '8':
			return [...cellElements8].every(cell => {
				return cell.classList.contains(x) || cell.classList.contains(o)
			})
			break;

	}

}


function checkMacroWin(curMark){
	return winning.some(combinations => {
		return combinations.every(i => {
			return microBoardElems[i].classList.contains(curMark);
		})
	})
}

function checkMacroDraw(){
	return [...microBoardElems].every(microBoard => {
		return microBoard.classList.contains(x) || microBoard.classList.contains(o) || microBoard.classList.contains('draw')
	})
}
