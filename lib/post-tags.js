export default function getPostTags(content) {
    // const regex = /\w/
  
    let words = content.split(',').filter(element => element !== '');
    // .filter((word) => {
    //   if (word.includes('<img')) {
    //     images += 1
    //   }
    //   return regex.test(word)
    // }).length
  
    return words;
  }