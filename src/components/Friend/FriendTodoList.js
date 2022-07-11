import React ,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as todoActions } from "../../redux/modules/todo";

import styled, { css } from 'styled-components';
import Modal from "../../element/Modal";

//icons
import add from "../../assets/images/icons/add.png"
import check from "../../assets/images/icons/check.png"

const FriendTodoList = () => {
    const dispatch = useDispatch();
    
    // friend store에서 member배열만
    const memberStateList = useSelector(state=>state.todo.member);
    //todos배열만
    const todosList = useSelector(state=>state.todo.todos);

    console.log("friend memberStateList:::",memberStateList);
    console.log("friend todosList:::",todosList);

     //modal 상태관리
        //사진인증
    const [proofModal,setProofModal] = useState(false);
    const clickedproofBtn = () => {
        setProofModal(true);
    }
    const onProof = () => {
        console.log("인증하기");
        setProofModal(false);
    }

    useEffect(() => {
        dispatch(todoActions.getFriendTodolistDB())
    },[])

    return (
        <TodoListContainer>
         {todosList && todosList.map((todo,idx) => {
            return (
                <TodoListWrap key={idx}>
                <div>{todo.createdAt}</div>
                <TodoListContext>
                    <PlusButtonWrap  todoType = {todo.todoType}>
                        {todo.confirmState ? null: (
                        <div>
                            <img src={add} />
                        </div>
                        )}
                    </PlusButtonWrap>
                    <TodoDetailBox>
                        <DetailBoxDiv1>
                            <div>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                            </div>
                            <div>{todo.content}</div>
                            <div>{todo.startDate} - {todo.endDate}</div>
                        </DetailBoxDiv1>
                        <div>
                            {todo.todoType === 1 ? null : (
                            <div onClick={clickedproofBtn}><img src={check}/></div>
                            )}
                            
                        </div>
                    </TodoDetailBox>
                </TodoListContext>

                
                {/* 사진인증모달 */}
                <Modal
                isProof = {true}
                title={"사진인증"}
                udtText={"인증요청"}
                proofText={"사진인증"}
                onProof={onProof}
                visible={proofModal}
                >
                </Modal>
            </TodoListWrap>
            )
        })} 

        </TodoListContainer>
    )
}

export default FriendTodoList;

const TodoListContainer = styled.div`
    overflow: auto;
    max-width: 360px;
    width: 100%;
    height: 402px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 174px;
`;
const TodoListContext = styled.div`

`
const TodoListWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 14px;
    gap: 4px;

    & > div:nth-child(1) {
        font-size: 14px;
    }
    ${TodoListContext} {
        display: flex;
        width: 336px;
        min-height: 74px;
        border-radius: 10px;
        background: #C2C2C2;
    }
`;

const PlusButtonColorSt = css`
    ${props => 
    props.todoType === 2 && 
        css`
        background: ${props.theme.main02};
        `
    }
    ${props => 
    props.todoType === 1 && 
        css`
        background: ${props.theme.main01};
        `
    }   
`;
const PlusButtonWrap = styled.div`
    //plus버튼 색깔
    ${PlusButtonColorSt}

    width: 52px;
    min-height: 74px;
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 24px;
        height: 24px;
    
    }
`;
const DetailBoxDiv1 = styled.div`
    font-size: 12px;
    gap:5px;
    padding: 10px 0;
    
    & > div:nth-child(1) {
        gap: 2px;
        display: flex;

    }
    & > div:nth-child(3) {
        color: #6C6C6C;
        }

`; 
const TodoDetailBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    ${DetailBoxDiv1} {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 14px;
    }
    & > div:nth-child(2) {
        display: flex;
        align-items: center;
        padding: 0 14px 0 20px;
        gap: 11px;

        div {
            width: 24px;
            height: 24px;
        }
    }
`;
const DifficultyIcon = styled.div`
    width: 16px;
    height: 16px;
    background: #6C6C6C;
`;