import { Link } from 'react-router-dom';
import Item from '../../components/item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';
import {MdRoofing} from 'react-icons/md';

function Items(props) {

    const items = props.data.map((item) => <Item key={item.id} data={item} />);
    return(
        <ButtonContainer>
            <div>
                { items }
                <Link to="/add"><FloatingButton secondary><MdRoofing /></FloatingButton></Link>
            </div>
        </ButtonContainer> 
    );
}

export default Items;