import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as spotActions from '../actions/spotActions';

class spotList extends React.Component {

    renderData() {
        return <div>{this.props.spots}</div>
    }

    render() {
        return (
            <div>
                {this.props.length > 0 ?
                    this.renderData()
                    :
                    <div className="">
                        No spots added yet...
                    </div>
                }
            </div>
        )
    }
}

spotList.propTypes = {
    spotActions: PropTypes.object,
    spots: PropTypes.array
};

function mapStateToProps(state) {
    return {
        stuffs: state.spots
    }
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(spotActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(spotList);