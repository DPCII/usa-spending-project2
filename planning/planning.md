# Planning

My intent for this API is to build the architecture to enable three levels of analysis of agency spending. The first level is the agency, identified by the federal agency id. The second level is the spending category, which covers the most general accounting classification. The third level breaks down said classification into its constituent parts. 

The API is structured dynamically. As it is currently written, the agency id and subcategories are hardcoded into the API call, but minor improvements will allow dynamic requests. The following routes are available:

### Agency Summary
```
/api/agency_summary/ -   This returns a GET request for the currently hardcoded agency
```
### Agency Spending Categories
```
/api/object_class/  -   This returns a GET request for the previously identified agency's spending categories
```
### Agency Spending Sub-category
```
"minor_object_class/"               -   This returns a GET request for (currently hardcoded) sub-category 20 of the previous spending category
"minor_object_class/:name"          -   This returns a single GET request by name of the spending sub-category
"minor_object_class/byid/:id"       -   This returns a single GET request by the ObjectId of the spending sub-category
"minor_object_class/"               -   This disabled POST route allows creating new spending sub-categories
"minor_object_class/:id"            -   This disabled PUT route allows modifying new spending sub-categories identified by their ObjectId
"minor_object_class/:id"            -   This disabled DELETE route allows deleting database documents based on their ObjectId
```

