import '../../../styles/Home.less';

import { Button } from 'antd';


function RenderHomePage(props) {

  const { userInfo } = props;

  return (<>
      <div>
        <h2> This is Home component </h2>
      </div>

      <Button
          type="primary"
          // // onClick={() => authService.logout()}
          // onClick={() => logout()}
      >
        Logout
      </Button>
  </>);
}


export default RenderHomePage;