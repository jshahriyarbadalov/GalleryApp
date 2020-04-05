import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';

import { connect } from 'react-redux';

import { fetchImages } from '../store/actions/images';

import ImageItem from '../components/ImageItem';

class CategoriesScreen extends Component {

    
    componentDidMount() {
        this.props.fetchImages()
    }

    _keyExtractor = (item) => item.id;

    _renderItem = ({item}) => (
        < ImageItem 
              id = {item.id}
              thumbnailUrl = {item.urls.small}
              regularUrl = {item.urls.regular}
              authorName = {item.user.name}
              navigate = {this.goToImageScreen}/>
    );

    goToImageScreen = (regularUrl) => {
        const { navigate } = this.props.navigation;
        return navigate('ImageDetail', { regularUrl })
    }

    render() {

        if (this.props.isFetching) {
            return ( 
                <View> 
                  <ActivityIndicator size = 'large' animating />
                </View>);
            } else {
                return ( 
                  <View style = {styles.container}>
                      <FlatList 
                          data={this.props.data}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItem}/> 
                  </View>
                )
            }
        }
    }

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

const mapStateToProps = state => {
    return {
        data: state.fetchImagesData.apidata,
        isFetching: state.fetchImagesData.isFetching
    }
}
CategoriesScreen.navigationOptions = () => {
    return {
        headerTitle: 'Image Categories',
    };
}


export default connect(mapStateToProps, { fetchImages })(CategoriesScreen)



