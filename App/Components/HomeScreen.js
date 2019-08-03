import React, {Fragment, Component} from 'react';
import {
    Text,
    View,
    FlatList
  } from 'react-native';
  import {monthNames} from '../Constants/appConstants';

export default class HomeScreen extends Component {
    render () {
        return (
            <View style={{flex: 1, backgroundColor: "gray"}}>
                <View style={{backgroundColor: "steelblue"}}>
                    <Text style={{padding: 5}}>{monthNames[new Date().getMonth()]}</Text>
                    <Text style={{fontSize: 26, padding:10, marginBottom:5}}>INR: {this.props.expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                </View>
                <FlatList
                    data={this.props.smsList}
                    renderItem={({item}) => (
                        <View>
                            <View style={{marginBottom: 5, display: "flex", flexDirection: 'row'}}>
                                <Text style={{flex: 1, fontWeight: "bold"}}>{item.address}</Text>
                                <Text style={{flex: 1, fontWeight: "bold"}}>INR: {item.expenseMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                <Text style={{flex: 2, fontWeight: "bold"}}>{new Date(item.date).toLocaleString()}</Text>
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{marginBottom: 1, fontSize:14, fontWeight: "bold"}}>Expense Message</Text>
                                <Text style={{marginBottom: 5, fontSize:12}}>{item.body}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}