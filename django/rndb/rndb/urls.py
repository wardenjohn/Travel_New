from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from foodshop import views
from REACT import views
from newsdb import views
from userdb import views
from turenews import views
from mark import views
from diary import views
from foodshop_estimate import views
from food_information import views
#urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'rndb.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

   # url(r'^admin/', include(admin.site.urls)),
#)

urlpatterns=patterns('',
			url(r'^admin/', include(admin.site.urls)),
			url(r'', include(admin.site.urls)),
			url(r'^getofficeweb/place(.+)/$','REACT.views.getofficeweb'),#it need to mate the name in the regular expression
			url(r'^getscenic/place(.+)/$','newsdb.views.getscenic'),
			url(r'^user/getuser/$','userdb.views.getuser'),
			url(r'^getscenic/id(.+)/$','newsdb.views.getbyID'),
			url(r'^user/reg/$','userdb.views.reg'),
			url(r'^news/getnews/$','turenews.views.getnews'),
			url(r'^news/id(.+)/$','turenews.views.getnewsbyID'),
			url(r'^mark/userid(.+)/$','mark.views.markbyUser'),
			url(r'^mark/scenicid(.+)/$','mark.views.markbyScenic'),
			url(r'^user/infor/id(.+)$','userdb.views.infomation'),
			url(r'^user/writebyUser/$','mark.views.writebyUser'),
			url(r'^getscore/id(.+)/$','mark.views.score'),
			url(r'^getnews/keyword=(.*)/$','turenews.views.getnewsByKey'),
			url(r'^push/pushDiary/$','diary.views.pushDiary'),
			url(r'^getDiary/uid=(.+)/$','diary.views.getDiary'),
			url(r'^getfoodshop_byplace/place(.+)/$','foodshop.views.getfoodshop'),
			url(r'^foodshop_estimate/writebyUser/$','foodshop_estimate.views.user_post'),
			url(r'^getfoodshop/id(.+)/$','foodshop.views.getbyID'),	
			url(r'^mark/getfoodshop_byid/id=(.+)/$','foodshop_estimate.views.get_mark_byID'),
			url(r'^getscore/foodshop/id(.+)/$','foodshop_estimate.views.score'),
			url(r'^getfoodshop/information_name(.+)/$','food_information.views.getinfo')
)
