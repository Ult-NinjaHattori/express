var express = require('express');
var router = express.Router();
// レスポンスのデータ（ノート全件）
const responseObjectDataAll = {
textObject1 : {
id: 1,
title: 'note1 title death^_^',
subTitle: 'note1 subtitling of excusion',
bodyText: 'note1 main tree death yo guminndomo'
},
textObject2 : {
id: 2,
title: 'note2 title death>-<',
subTitle: 'note2 submission',
bodyText: 'note2 main bunsyo nanndakedo shiyougawakarinikuinndayobokega'
},
};
/**
* メモを全件取得するAPI
* @returns {Object[]} data
* @returns {number} data.id - ID
* @returns {string} data.title - タイトル
* @returns {string} data.text - 内容
*/
router.get('/', function (req, res, next) {
// 全件取得して返す
res.json(responseObjectDataAll);
})
module.exports = router;
