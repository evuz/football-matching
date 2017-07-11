import { connect } from 'react-redux';

import HeaderComponent from '@/components/Header';
import { goLogin } from '@/reducers/navigation';

const mapDispatchToState = {
  onClickLogin: goLogin
}

export default connect(null, mapDispatchToState)(HeaderComponent);
