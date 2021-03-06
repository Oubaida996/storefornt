import React, { useEffect, useState } from 'react';
import { getCategories } from '../../Redux/Reducer/categoriesReducer'
import { getProducts } from '../../Redux/Reducer/productsReducer'

import { Tabs, Tab, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Products/Products'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    // console.log({ value });
    // 5 - change data in reduce by dispatch
    const dispathchData = useDispatch();
    useEffect(() => {
        dispathchData(getProducts());
    }, []);
    const products = useSelector(state => state.Products.products);
    console.log({ products });

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 4 }}>
                    {products.map((item, index) => {
                        if (item.categoryAssociation === children) {
                            return (
                                <Product item={item} key={index} />
                            )
                        }
                    })}
                </Box>
            )}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [categories, setCategories] = useState([]);

    // 5 - change data in reduce by dispatch
    const dispathchData = useDispatch();
    useEffect(() => {
        dispathchData(getCategories());
    }, []);
    //4- access data from store reducer by useSelector
    const dataCategories = useSelector(state => state.Categories.categories);
    console.log({ dataCategories });

    useEffect(() => {
        setCategories(dataCategories);
    }, [dataCategories])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        categories.map((cat, index) => {
                            return (
                                <Tab label={cat.normalizedName} {...a11yProps(index)} key={index} />
                            );
                        })
                    }
                </Tabs>
            </Box>
            {
                categories.map((cat, index) => {
                    return (
                        <TabPanel value={value} index={index} key={index}>
                            {cat.normalizedName}
                        </TabPanel>
                    );
                })
            }
        </Box>
    );
}
