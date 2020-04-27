from pymongo import MongoClient


try:
    client = MongoClient('mongodb://mongo-server', 27017)
    db = client['test']
    col = db['person']
except e:
    print(e)

for doc in col.find({}):
    print(doc)

