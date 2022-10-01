import {Drawer, Tabs } from 'antd';
import 'antd/dist/antd.css';

const DrawerData = (props) => {
    const { onClose, open,user,tabData } = props;

    return (
        <Drawer width={640} placement="right" onClose={onClose} open={open} title={user.name} bodyStyle={{ backgroundColor: '#fade35' }} headerStyle={{
            fontSize:'14px',
            textShadow: '1px 0 ##00000, -1px 0 ##00000, 0 1px ##00000, 0 -1px ##00000,1px 1px ##00000, -1px -1px ##00000, 1px -1px ##00000, -1px 1px ##00000'}} >
            <Tabs
                defaultActiveKey={1}
                type="card"
                items={tabData}
      />
      </Drawer>
    )
}

export default DrawerData;