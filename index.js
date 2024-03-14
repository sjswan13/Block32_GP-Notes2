const pg = require('pg');
const express = require('express');
const client = new pg.Client(process.env.DATABASE_URL || 
  'postgres://localhost/the_acme_notes_db');
const app = express();