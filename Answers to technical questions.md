# User Stories

As a user running the application
I can view a list of restaurants in a user submitted City (e.g. Toronto)
So that I know which restaurants are currently available
I can refine the results by name, location and area
So that the results are more catered towards my location
As a user, I want to see the storefront and the delivery cost
So I can gain a better understanding of the store and pricing
As a user I want the results to be paginated
So I can save on bandwidth if my result is on the first few pages
As a user I want to be able to load the app on various devices (Mobile, Tablet and Desktop), so I can access the site on the go.




1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent about 6.85hours. If I had more time, I would add more tests to the components.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Recently they've introduced Hooks. I haven't used it in this project.

3. How would you track down a performance issue in production? Have you ever had to do this?
I'd have to enable the Redux devtools, as wel as the React Profiler. Then, I can debug it using the React and Redux devtools.


4. How would you improve the API that you just used?
I'd set the cache control so that the responses are cached by the client for a few minutes, so we can avoid same requests hitting the servers again. Next, I'd restrict the access to limited amount of clients. If there isn't any caching in place on the server side, I'd cache the results for a couple of minutes. I'd put it behind a load balancer so the server doesn't get bogged down. 