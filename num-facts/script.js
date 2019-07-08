async function getNumFact(evt) {
  evt.preventDefault()
  fav_num = evt.target[0].value
  resp = await axios.get(`http://numbersapi.com/${fav_num}`)

  handleNumFactResponse(resp.data)
}

function handleNumFactResponse(num_fact) {
  $('#num-fact').text(num_fact)
}

$('#favorite-num-fact').on("submit", getNumFact)



async function getNumFacts(evt) {
  evt.preventDefault()
  fav_num = evt.target[0].value
  resp = await axios.get(`http://numbersapi.com/${fav_num}`)

  handleNumFactsResponse(resp.data)
}

function handleNumFactsResponse(num_facts) {
  for (let num in num_facts) {
    let $fact = $("<li>").text(num_facts[num])
    $('#num-facts').append($fact)
  }
}

$('#favorite-num-facts').on("submit", getNumFacts)



async function getFourNumFacts(evt) {
  evt.preventDefault()
  fav_num = evt.target[0].value

  let resp1 = axios.get(`http://numbersapi.com/${fav_num}`)
  let resp2 = axios.get(`http://numbersapi.com/${fav_num}`)
  let resp3 = axios.get(`http://numbersapi.com/${fav_num}`)
  let resp4 = axios.get(`http://numbersapi.com/${fav_num}`)

  let fact1 = await resp1
  let fact2 = await resp2
  let fact3 = await resp3
  let fact4 = await resp4

  handleFourNumFactsResponse([fact1, fact2, fact3, fact4])
}

function handleFourNumFactsResponse(facts) {
  for (let fact of facts) {
    let $fact = $("<li>").text(fact.data)
    $('#four-num-facts').append($fact)
  }
}

$('#four-favorite-num-facts').on("submit", getFourNumFacts)