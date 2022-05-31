import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    // console.log({ value });
    const products = useSelector(state => state.Products.products);
    // console.log({ products });


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {products.map((item, index) => {
                        if (item.catId === children) {
                            return <div key={index}>
                                <Typography>{item.proName}</Typography>
                            </div>
                        }


                    })}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

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
    const dispathchData = useDispatch();


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={categories[0].catName} {...a11yProps(0)} />
                    <Tab label={categories[1].catName} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {categories[0].id}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {categories[1].id}
            </TabPanel>

        </Box>
    );
}
