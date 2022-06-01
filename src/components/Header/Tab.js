import React from 'react';

import { Tabs, Tab, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from '../Products/Products'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    // console.log({ value });
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
    //4- access data from store reducer by useSelector
    const categories = useSelector(state => state.Categories.categories);

    // console.log({ categories });
    //5- change data in reduce by dispatch
    // const dispathchData = useDispatch();


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
