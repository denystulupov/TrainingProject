import Counter from './Counter';
import {addNumberAC, setZeroAC} from "../../reducers/counter-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        counter : state.counterPage.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (number) => {
            dispatch(addNumberAC(number))
        },
        setZero: () => {
            dispatch(setZeroAC())
        }
    }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;