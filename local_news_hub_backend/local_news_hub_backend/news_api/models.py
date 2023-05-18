# from django.db import models
#
#
# class Article(models.Model):
#     id = models.UUIDField(primary_key=True)
#     # source_id = models.CharField(max_length=100)
#     # source_name = models.CharField(max_length=100)
#     author = models.CharField(max_length=100)
#     title = models.CharField(max_length=200)
#     description = models.TextField()
#     url = models.URLField()
#     url_to_image = models.URLField()
#     published_at = models.DateTimeField()
#     article_type = models.CharField(max_length=100)
#     category = models.CharField(max_length=100)
#     content = models.TextField()
#
#     def __str__(self):
#         return self.title
#
#
# class Category(models.Model):
#     title = models.CharField(max_length=225)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#
#     def __str__(self):
#         return self.title
#
#     def __repr__(self):
#         return self.title
#
#
# class News(models.Model):
#     category = models.ForeignKey(Category, on_delete=models.CASCADE)
#     title = models.CharField(max_length=225)
#     summary = models.TextField()
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#
#     def __str__(self):
#         return self.title
#
#     def __repr__(self):
#         return self.title
#
#
