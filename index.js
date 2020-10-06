// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) 
{
    for (let i = 0; i < gifts.length; i++) 
    {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }

  wrapGifts(gifts);

  function writeCards(senders, occasion)
  {
      let messages = []
      for (let i = 0; i < senders.length; i++)
      {
          messages.push(`Thank you, ${senders[i]}, for the wonderful ${occasion} gift!`)
      }

      return messages
  }

  function countDown(num)
  {
      while (num >= 0)
      {
          console.log(num)
          num--
      }
  }