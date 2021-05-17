/**
 * item URL에서 item 번호만 뽑아낸다.
 * 
 * @param itemURL https://opgg-static.akamaized.net/images/lol/item/1056.png
 * @returns {String} itemId
 * 
 * @warning
 * URL에 숫자가 아이템번호 밖에 없다고 가정한다.
 * URL에 숫자가 추가된경우 구현을 변경해야함.
 */
const itemParser = (itemURL: string) => {
  return itemURL.replace(/[^0-9]/g, "");
};

export { itemParser };
