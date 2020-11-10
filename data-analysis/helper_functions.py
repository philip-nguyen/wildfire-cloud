
# THESE ARE FUNCTIONS TO HELP IN MANIPULATION OF DATA


# A function to report the percentage of null values for each feature

def percentage_null(df):

    ''' 
    A function to report percentage of null values in each feature
    INPUT: a pandas dataframe object
    OUTPUT: prints the pecentage of null values in each feature and returns the percentage values of each column in a list
    '''

    # Number of records in the dataframe
    rec = df.shape[0]
    nullPercentage = list()

    for col in df.columns:
        null_values = df[col].isnull().sum()
        null_perc = round((null_values/rec) * 100, 2)
        nullPercentage.append(null_perc)
        print(col, "  --  ", null_perc, "%")
    return nullPercentage





# A function to drop features with  over 30% null values 

def drop_feature(df):

    rec = df.shape[0]
    dropping_cols = list()
    for col in df.columns:
        null_values = df[col].isnull().sum()
        null_perc = round((null_values/rec) * 100, 2)
        if null_perc > 30:
            dropping_cols.append(col)
    
    df.drop(dropping_cols, axis=1, inplace=True)
    return df




# Fire size and class validation function

def fire_class_valid(fire_class_str):
    return fire_class_str.split(" - ")[1].strip()



# Fire detector validation function
def fire_detector_valid(fire_class_str):
    return fire_class_str.split(" - ")[1].strip()



# FIRE INTENSITY VALIDATION FUNCTION

def fire_intensity_valid(fire_class_str):
    return fire_class_str.split(" - ")[1].strip()


# STATE NAME VALIDATION FUNCTION

def state_name_valid(fire_class_str):
    return fire_class_str.split(" - ")[1].strip()


# STATISTICAL FIRE CAUSE VALIDATION FUNCTION

def stat_cause_valid(stat_cause_str):
    return stat_cause_str.split(" - ")[1].strip()
