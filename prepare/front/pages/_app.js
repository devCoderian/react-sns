import 'antd/dist/antd.css'; 
import PropTypes from 'prop-types';

import wrapper from '../store/configureStore';


const App =({Component}) =>{
    
    return(
        // <Provider></Provider> 6버전 이상부터 생략
        <Component />
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);