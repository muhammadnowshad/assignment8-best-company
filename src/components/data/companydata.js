const companyData = [
    {   
        img : 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5ODc2NTUzODU1ODcwOTY1/gettyimages-83414114.jpg',
        founder : 'Larry Page',
        company : 'Google',
        employees: 139995,
        sector : 'Technology',
        revenue: 181,
        link: 'https://www.google.com/',
    },
    {   
        img : 'https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Fde962dab-04fe-45a5-94e4-ae7e62ee5f78.2Ejpeg/170x170/quality/80/mark-zuckerberg.jpg',
        founder : 'Mark Zuckerberg',
        company : 'Facebook',
        employees: 63404,
        sector : 'Social Networking',
        revenue: 86,
        link: 'https://www.facebook.com/',
    },
    {   
        img : 'https://scontent.fdac23-1.fna.fbcdn.net/v/t1.6435-9/238934233_387368569420748_5386398352393347412_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Kq_Fvc_eiS0AX9Sh5M3&_nc_ht=scontent.fdac23-1.fna&oh=a94c12cb505d93bf3dccedce162f9438&oe=6174070C',
        founder : 'Bill Gates',
        company : 'Microsoft',
        employees: 182268,
        sector : 'Technology',
        revenue: 41,
        link: 'https://www.microsoft.com/',
    },
    {   
        img : 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg',
        founder : 'Jeff Bezos',
        company : 'Amazon',
        employees: 1335000,
        sector : 'Consumer Discretionary',
        revenue: 113,
        link: 'https://www.amazon.com/',
    },
    {   
        img : 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg',
        founder : 'Steve Jobs',
        company : 'Apple',
        employees: 147000,
        sector : 'Technology',
        revenue: 137,
        link: 'https://www.apple.com/',
    },
    {   
        img : 'https://networthandsalary.com/wp-content/uploads/2020/09/Lee-Byung-chul.jpg',
        founder : 'Lee Byung-chul',
        company : 'Samsung',
        employees: 287439,
        sector : 'Electronics',
        revenue: 200,
        link: 'https://www.samsung.com/',
    },
    {   
        img : 'https://www.thefamouspeople.com/profiles/thumbs/gordon-moore-1.jpg',
        founder : 'Gordon Moore',
        company : 'Intel',
        employees:  110600.,
        sector : 'Technology',
        revenue: 77,
        link: 'https://www.intel.com/',
    },
    {   
        img : 'https://images.gr-assets.com/authors/1386756344p8/1350.jpg',
        founder : 'Sam Walton',
        company : 'Walmart',
        employees: 2300000,
        sector : 'Retail',
        revenue: 548,
        link: 'https://www.walmart.com/',
    },
    {   
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Kiichiro_Toyoda.jpg/220px-Kiichiro_Toyoda.jpg',
        founder : 'Kiichiro Toyoda',
        company : 'Toyota Motor',
        employees: 366300,
        sector : 'Automotive',
        revenue: 247,
        link: 'https://www.toyota.com/',

    },
    {   
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Min-oil-Naimi-05.JPG/220px-Min-oil-Naimi-05.JPG',
        founder : 'Ali I. Al-Naimi',
        company : 'Saudi Aramco',
        employees: 66800,
        sector : 'Oil and Gas',
        revenue: 229,
        link: 'https://www.aramco.com/',
    },
    {   
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_and_Hans_Koenigsmann_at_the_SpaceX_CRS-8_post-launch_press_conference_%2826223624532%29_%28cropped%29.jpg/300px-Elon_Musk_and_Hans_Koenigsmann_at_the_SpaceX_CRS-8_post-launch_press_conference_%2826223624532%29_%28cropped%29.jpg',
        founder : 'Elon Musk',
        company : 'Tesla',
        employees: 70757,
        sector : 'Automotive',
        revenue: 31,
        link: 'https://www.tesla.com/',
    },
    {   
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg/220px-Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg',
        founder : 'Jack Ma',
        company : 'Alibaba',
        employees: 	117600,
        sector : 'E-commerce',
        revenue: 72,
        link: 'https://www.alibaba.com/',
    },
    {   
        img : 'https://pbs.twimg.com/profile_images/728686531926351872/Fh3CDRc-_400x400.jpg',
        founder : 'Dee Hock',
        company : 'Visa',
        employees: 20500 ,
        sector : 'Financial Services',
        revenue: 21,
        link: 'https://www.visa.com/',
    },
    {   
        img : 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Pony_Ma_2011.jpg',
        founder : 'Ma Huateng',
        company : 'Tencent',
        employees: 85858 ,
        sector : 'Conglomerate',
        revenue: 73,
        link: 'https://www.tencent.com/',
    },
    {   
        img : 'https://cdn.vox-cdn.com/thumbor/bQAf_ZO_4yQTGIYVdWSSQpfzZcw=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66686799/1167010559.jpg.0.jpg',
        founder : 'Peter Thiel',
        company : 'Paypal',
        employees: 26500,
        sector : 'Financial',
        revenue: 21,
        link: 'https://www.paypal.com/',
    }
]