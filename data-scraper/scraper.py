import json
from pprint import pprint
import requests
from bs4 import BeautifulSoup

cuisine_mappings = {"Mexican": 1, "Italian": 2,
                    "American": 3, "French": 4,
                    "Chinese": 5, "Japanese": 6,
                    "Mediterranean": 7, "Indian": 8,
                    "Japanese": 9}

class WebPage:

    def __init__(self, url_in):
        self.url = url_in
        self.html = None
        self.json = {}
        if self.get_html():
            self.get_name()
            self.get_desc()
            self.get_food_img()
            self.get_serving_size()
            self.get_ingredients()
            self.get_preparation()
            self.get_nutrition()
        else:
            return self.html

    def get_html(self):
        resp = requests.get(self.url)
        if resp is not None:
            self.html = BeautifulSoup(resp.content, 'html.parser')
            self.json['originalURL'] = self.url
            return True
        else:
            return False

    def get_name(self):
        name = self.html.find('div', class_='title-source').h1.text
        self.json['name'] = name

    def get_desc(self):
        desc = self.html.find('div', class_='dek').p.text
        self.json['desc'] = desc

    def get_food_img(self):
        img_url = self.html.html.find('picture', class_='photo-wrap')
        self.json['imageURL'] = img_url.find('source')['srcset']

    def get_serving_size(self):
        try:
            serving_size = self.html.select_one('dd', class_='yield')
            self.json['servingSize'] = serving_size.text
        except AttributeError:
            self.json['servingSize'] = '2'


    def get_ingredients(self):
        ingredients = self.html.find_all('li', class_='ingredient')
        ingredient_list = []
        for ingredient in ingredients:
            ingredient_list.append(ingredient.text)
        self.json['ingredients'] = ingredient_list

    def get_preparation(self):
        preparations = self.html.find_all('li', class_='preparation-step')
        preparation_steps = []
        for step in preparations:
            preparation_steps.append(step.text.strip())
        self.json['steps'] = preparation_steps

    def get_nutrition(self):
        labels = self.html.find_all('span', class_='nutri-label')
        data = self.html.find_all('span', class_='nutri-data')
        nutrition = {}
        for index in range(len(labels)):
            nutrition[labels[index].text] = data[index].text
        self.json['nutrition'] = nutrition

    def add_category(self, category):
        self.json['category'] = category
        self.json['cuisineId'] = cuisine_mappings[category]


if __name__ == '__main__':
    # https://www.epicurious.com/recipes-menus/what-to-cook-this-cozy-fall-weekend-november-8-10-2019-gallery
    # Above might be helpful for later
    # url = 'https://www.epicurious.com/recipes/food/views/red-pesto-rigatoni-pasta'
    new_json = []
    with open('recipes.json', 'r') as json_file:
        data = json.load(json_file)
        cuisine_id = 1
        for cat in data:
            for url in data[cat]:
                print(url)
                details = WebPage(url)
                details.add_category(cat)
                new_json.append(details.json)
                cuisine_id += 1

    with open('../api/public/epicurious_recipes.json', 'w+') as outfile:
        json.dump(new_json, outfile)
