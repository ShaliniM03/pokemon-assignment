import './index.css';

const Card = props => {
    const { user,index,onClick } = props;
    return (
        <li key={index} className='DataValue'><p className='userName' onClick={()=>onClick(user)}>{user.name}</p></li>
    )
}

export default Card;