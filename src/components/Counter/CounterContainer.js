import Counter from './Counter';
import {addNumberAC, setZeroAC} from "../../reducers/counter-reduser";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
};

let mapDispatchToProps = (dispatch) => {
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