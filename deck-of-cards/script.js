$('document').ready(async function() {
  //global variable
  let resp = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  deck_id = resp.data.deck_id


  async function getCardFromSameDeck(evt) {
    evt.preventDefault()
    let resp = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)

    handleCardFromSameDeckResponse(resp.data)
  }

  function handleCardFromSameDeckResponse(card) {
    let randX =  Math.floor(Math.random() * 20)
    let randY = Math.floor(Math.random() * 20)
    let randDegree = Math.floor(Math.random() * 90) - 44;
    let cardImage = card.cards[0].image
    let image = $(`<img src=${cardImage} style='transform:rotate(${randDegree}deg); top:${randY}px; left:${randX}px'>`)
    $('#card').append(image)
  }

  $('#gimme-card').on("submit", getCardFromSameDeck)

})