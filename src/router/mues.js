/**
 * 
 */
export const MUES = [
    {
        path: '/',
        key: 'sub1',
        title: '首页',
        component: 'Home',
        Icon: 'user',
    },
    {
        path: '/page1',
        key: 'sub2',
        title: 'Page1',
        component: 'Page1',
        Icon: 'video-camera'
    },
    {
        path: '/page2',
        key: 'sub3',
        title: 'Page2',
        component: 'Page2',
        Icon: 'upload'
    },
    {
        // path: '/page2',
        key: 'sub4',
        title: 'Page3',
        component: 'Page3',
        Icon: 'upload',
        sub: [
            {
                key: '1',
                path: '/page3/home1',
                title: 'home1',
                component: 'Home',
                Icon: '',
            },
            {
                key: '2',
                path: '/page3/home2',
                title: 'home2',
                component: 'Home',
                Icon: '',
            }
        ]
    },
    {
        path: '/Button',
        key: 'sub5',
        title: 'Button',
        component: 'Button',
        Icon: 'like-o'
    },
    {
        path: '/Pagination',
        key: 'sub6',
        title: 'Pagination',
        component: 'Pagination',
        Icon: 'like-o'
    },
    {
        path: '/Steps',
        key: 'sub7',
        title: 'Steps',
        component: 'Steps',
        Icon: 'like-o'
    },
    {
        path: '/Cascader',
        key: 'sub8',
        title: 'Cascader',
        component: 'Cascader',
        Icon: 'like-o'
    }, 
    {
        path: '/Table',
        key: 'sub9',
        title: 'Table',
        component: 'Table',
        Icon: 'like-o'
    }, 
    {
        path: '/TreeSelect',
        key: 'sub10',
        title: 'TreeSelect',
        component: 'TreeSelect',
        Icon: 'video-camera'
    },
    {
        path: '/Modal',
        key: 'sub11',
        title: 'Modal',
        component: 'Modal',
        Icon: 'video-camera'
    },
];