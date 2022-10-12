import { useState, useEffect } from 'react';
import Loader from '../../components/loader';
import './index.css';
import { getData } from '../../actions/home';
import Card from '../../components/card';
import DrawerData from '../../components/drawer';
import { Tag } from 'antd';
import Logo from '../../assets/images/logo.png'
import { API_CONSTANTS } from '../../constants/api-constants';


function Home() {
    //declaration of state variables and update function 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [datavalue, setValue] = useState({});
    const [tabData, setTabData] = useState([]);

    // fetching data from api
    useEffect(() => {
        getData(API_CONSTANTS.GETDATA, response => {
            setLoading(false);
            setData(response.data.results);
        });
    }, [])
    
    const onClickUser = value => {
        // to get the details about user
        getData(value.url, response => {
            const tabs = [
                {
                    label: 'Abilities',
                    key: 1,
                    children:<div className='tagData'>{response.data.abilities&&response.data.abilities.length && response.data.abilities.map(items => { return <Tag color='#788cd5' style={{
                        margin: '0.6rem',width:'100px', padding:'10px',textAlign:'center', borderRadius:'4px',textTransform:'capitalize',fontSize:'14px',cursor:'pointer'}}  onClick={()=>onClickData(items.ability.url)}>{items.ability.name}</Tag> })} </div>
                },
                {
                    label: 'Forms',
                    key: 2,
                    children:<div className='tagData'>{response.data.forms&&response.data.forms.length && response.data.forms.map(items => { return <Tag color='#788cd5' style={{
                        margin: '0.6rem',width:'100px', padding:'10px',textAlign:'center', borderRadius:'4px',textTransform:'capitalize',fontSize:'14px' ,cursor:'pointer'}} onClick={()=>onClickData(items.url)}>{items.name}</Tag> })} </div>
                },
                {
                    label: 'Game Indices',
                    key: 3,
                    children: <div className='tagData'>{response.data.game_indices&&response.data.game_indices.length && response.data.game_indices.map(items => { return <Tag color='#788cd5' style={{
                        margin: '0.6rem',width:'100px', padding:'10px',textAlign:'center', borderRadius:'4px',textTransform:'capitalize',fontSize:'14px',cursor:'pointer'}}  onClick={()=>onClickData(items.version.url)}>{items.version.name}</Tag> })} </div>
                }
            ]
            setTabData(tabs);
            setOpenModal(true);
            setValue(value);
        }); 
    }

    const onCloseDrawer = () => {
        setOpenModal(false);
        setValue({});
        setTabData([]);
    }

    const onClickData = url => {
        window.open(url, '_blank');
    }

    return (
        <div className='container'>
            {loading ? <Loader /> :
                <>
                    <h1 className='heading'><img src={Logo} alt='' width='40' height='40' /> Pokemon</h1>
                    <ul className='Data'>
                        {data && data.length>0 && data.map((user, index) => {
                            return <Card index={index} user={user} onClick={onClickUser} />
                        })}
                    </ul>
                </>}
            {openModal && <DrawerData onClose={onCloseDrawer} open={openModal} user={datavalue} tabData={tabData} />}
    </div>
    )
}

export default Home;