const getData = (city) => {
    const params = {
        access_key: '1f0b4e209bdfa457de8f9f202e38d92a',
        query: city
    }
    axios.get('https://api.weatherstack.com/current', {params})
        .then(response => {
            const apiResponse = response.data
            console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`)
        }).catch(error => {
            console.log(error)
  })
  }