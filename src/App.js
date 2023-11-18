import { useState } from "react";
import { foods_database } from "./context";

function App() {

    let products = [

        { id: 1, name: 'سبزی پلو با ماهی', price: 130000, description: 'برنج ایرانی با 500 گرم ماهی قزل آلا', picAddress: ['pics/sbziPoloMahi_1.jpeg', 'pics/sbziPoloMahi_2.jpeg', 'pics/sbziPoloMahi_3.png'] },
        { id: 2, name: 'چلو گوشت', price: 220000, description: 'برنج ایرانی100 گرم همراه 200 گرم گوشت گوسفندی', picAddress: ['pics/choloGusht_1.jpg', 'pics/choloGusht_2.jpg', 'pics/choloGusht_3.jpg'] },
        { id: 3, name: 'خورشت قیمه', price: 90000, description: 'برنج ایرانی همراه 100گرم سیب زمینی و100گرم گوشت', picAddress: ['pics/khorestGheymeh_1.jpg', 'pics/khorestGheymeh_2.jpg', 'pics/khorestGheymeh_3.jpg'] },
        { id: 4, name: 'خورشت سبزی', price: 80000, description: 'برنج ایرانی 100گرم همراه 100گذم سبزی و 100گرم گوشت گوسفندی', picAddress: ['pics/khoreshteSabzi_1.jpg', 'pics/khoreshteSabzi_2.jpg', 'pics/khoreshteSabzi_3.jpg'] },
        { id: 5, name: 'زرشک پلو با مرغ', price: 110000, description: 'برنج ایرانی 200گرم همراه 250 گرم مرغ تازه', picAddress: ['pics/zereshkpoloMorgh_1.jpg', 'pics/zereshkpoloMorgh_2.jpg', 'pics/zereshkpoloMorgh_3.jpg'] },
        { id: 6, name: 'جوجه کباب', price: 110000, description: ' برنج ایرانی100 گرم همراه 200 گرم جوجه زعفرانی', picAddress: ['pics/jojehKabab_1.jpg', 'pics/jojehKabab_2.jpg', 'pics/jojehKabab_3.jpg'] },
        { id: 7, name: 'کباب کوبیده', price: 140000, description: 'برنج ایرانی100 گرم همراه 200 گرم گوشت گوسفندی تازه', picAddress: ['pics/koobideh_1.jpg', 'pics/koobideh_2.jpg', 'pics/koobideh_3.jpg'] },
        { id: 8, name: 'خورشت فسنجان', price: 135000, description: 'برنج ایرانی 100گرم همراه 200گرم مرغ تازه', picAddress: ['pics/fesenjan_1.jpg', 'pics/fesenjan_2.jpg', 'pics/fesenjan_3.jpg'] },
        { id: 9, name: 'مرغ شکم پر', price: 90000, description: 'برنج ایرانی 100گرم همراه 200گرم مرغ تازه و50گرم گردو', picAddress: ['pics/morghShekamPor_1.jpg', 'pics/morghShekamPor_2.jpg', 'pics/morghShekamPor_3.jpg'] },
        { id: 10, name: 'خورشت بادمجان', price: 75000, description: 'برنج ایرانی 100گرم گوشت گوسفندی 100گرم بادمجان 100گرم', picAddress: ['pics/khoreshteBademjan_1.jpg', 'pics/khoreshteBademjan_2.jpg', 'pics/khoreshteBademjan_3.jpg'] },
        { id: 11, name: 'خورشت آلو', price: 75000, description: "برنج ایرانی 100گرم گوشت گوسفندی 100گرم آلو 50گرم", picAddress: ['pics/khoreshteAloo_1.jpg', 'pics/khoreshteAloo_2.jpg', 'pics/khoreshteAloo_3.jpg'] },
        { id: 12, name: 'ماکارونی', price: 65000, description: 'ماکارونی 200گرم گوشت گوسفندی 100گرم', picAddress: ['pics/makaroni_1.jpg', 'pics/makaroni_2.jpg', 'pics/makaroni_3.jpg'] },
        { id: 13, name: 'کباب سلطانی', price: 160000, description: 'برنج ایرانی 100کرم گوشت گوسفندی 250گرم', picAddress: ['pics/soltani_1.jpg', 'pics/soltani_2.jpg', 'pics/soltani_3.jpg'] },
        { id: 14, name: 'کباب برگ', price: 155000, description: 'برنج ایرانی 100کرم گوشت گوسفندی 250گرم', picAddress: ['pics/barg-1.jpg', 'pics/barg-2.jpg', 'pics/barg-3.jpg'] },
        { id: 15, name: 'برنج', price: 40000, description: 'برنج ایرانی 150 گرم', picAddress: ['pics/berenj_1.jpg', 'pics/berenj_2.jpg', 'pics/berenj_3.jpg'] },

    ]
    let comments = [
        { id: 1, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
        { id: 2, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
        { id: 3, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
        { id: 4, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
        { id: 5, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
        { id: 6, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
        { id: 7, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
        { id: 8, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
        { id: 9, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
        { id: 10, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
        { id: 11, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
        { id: 12, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
        { id: 13, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
        { id: 14, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
        { id: 15, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] }
    ]

    let [allProducts, set_allProducts] = useState(products);
    let [allcomments, set_allcomments] = useState(comments);
    let [cart_array, set_cart_array] = useState([]);
    let [login_status, set_login_status] = useState(false);
    let [logined_User, set_logined_User] = useState(null);
    let [favList, set_favList] = useState([]);

    return (
        <>
            <foods_database.Provider value={{ allProducts, allcomments, cart_array, login_status, logined_User, favList }}>
                <h1>app</h1>
            </foods_database.Provider>
        </>
    )

}

export { App }
