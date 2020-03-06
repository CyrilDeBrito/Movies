const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.listen(8084);

const movies = [
  {
    id: 1,
    name: 'Knives Out 2019 Directed by Rian Johnson',
    description: 'When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan\’s dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan\’s untimely death.',
    price: 5,
    picture: '/assets/knives-out.jpg'
  },
  {
    id: 2,
    name: 'Parasite 2019 Directed by Bong Joon-ho',
    description: 'All unemployed, Ki-taek\’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',
    price: 5,
    picture: '/assets/parasite.jpg'
  },
  {
    id: 3,
    name: 'The Invisible Man 2020 Directed by Leigh Whannell',
    description: 'When Cecilia’s abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.',
    price: 4,
    picture: '/assets/the-invisible-man.jpg'
  },
  {
    id: 4,
    name: 'Suicide Squad 2016 Directed by David Ayer',
    description: 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
    price: 6,
    picture: '/assets/suicide-squad.jpg'
  },
  {
    id: 5,
    name: 'The Fighter 2010 Directed by David O. Russell',
    description: 'The Fighter, is a drama about boxer “Irish” Micky Ward’s unlikely road to the world light welterweight title. His Rocky-like rise was shepherded by half-brother Dicky, a boxer-turned-trainer who rebounded in life after nearly being KO’d by drugs and crime.',
    price: 4.5,
    picture: '/assets/suicide-squad.jpg'
  },
  {
    id: 6,
    name: 'Notting Hill 1999 Directed by Roger Michell',
    description: 'William Thacker is a London bookstore owner whose humdrum existence is thrown into romantic turmoil when famous American actress Anna Scott appears in his shop. A chance encounter over spilled orange juice leads to a kiss that blossoms into a full-blown affair. As the average bloke and glamorous movie star draw closer and closer together, they struggle to reconcile their radically different lifestyles in the name of love.',
    price: 2,
    picture: '/assets/notting-hill.jpg'
  },
];

let id_counter = movies.reduce(function(maxId,mov){
  return maxId < mov.id ? mov.id : maxId;
}, 0) + 1;

app.get('/api/movs', function (req, res) {
  if(req.query.name) {
    res.json(movies.filter(nameContains(req.query.name)));
  } else {
    res.json(movies);
  }
});

app.get('/api/movs/:id', function(req, res) {
  const a = movies.find(movWithId(req.params.id));
  res.json(a);
});

app.post('/api/movs', function (req, res) {
  req.body.id = id_counter++;
  movies.push(req.body);
  res.json(req.body);
});

app.put('/api/movs', function (req, res) {
  const idx = movies.indexOf(movies.find(movWithId(req.body.id)));
  if (idx > -1) {
    movies.splice(idx, 1, req.body);
  }
  res.json(req.body);
});

app.delete('/api/movs/:id', function(req, res) {
  const idx = movies.indexOf(movies.find(movWithId(req.params.id)));
  if (idx > -1) {
    movies.splice(idx, 1);
  }
  res.json();
});

function movWithId(id) {
  return function(mov) { return mov.id === parseInt(id);}
}

function nameContains(search) {
  return function(mov) {
    return mov.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  }
}
