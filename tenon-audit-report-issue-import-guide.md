# Tenon Audit Report Issue Import Guide

## Introduction
When you receive an audit report from Tenon, we provide you with two deliverables: The formal audit report and a CSV file. The CSV file can be used to import the issues we logged into GitHub using the script in this repository. 

## Import Process

### Understanding Tenon’s CSV file structure
Tenon’s Audits are conducted using a customized Jira workflow. The CSV file we deliver will have standard Jira field names, such as "Summary", "Issue Type", and "Description" as well as custom fields specific to our process, such as "WCAG Success Criteria". The script in this repository takes those custom fields and inserts them into the issue description for the GitHub Issue. 

#### For reference, here's the full list of fields in the CSV

* **Summary**:	Standard Jira field that represents the issue title
* **Issue key**:	Standard Jira field. This value automatically created and you may not want to import it, but we provide it for you in case you want to reference it later, especially in follow-on work such as retests.
* **Issue Type**:	Standard Jira field. You can map this field as-is, though its value will always be “Bug”
* **Project key**:	Standard Jira field. You may want to delete this column if you're importing this CSV file into a specific project or may want to change the values in this column to match the value from an specific pre-existing project
* **Project name**:	see above
* **Component/s**:	There will be multiple columns in the CSV file for components. Importing these fields may create new Components within Jira on import.
* **Labels**:	There may be one or more columns named "Labels". These are custom labels created during the audit process.
* **Description**:	Standard Jira field. Map this field as-is.
* **Outward issue link (Relates)**:	This is a standard Jira field. There will be multiple columns in the CSV file for Outward issue link (Relates). This represents related issues. Mapping them isn’t necessary, though it may be helpful, especially in tracking down the root cause of issues.
* **Custom field (Content Type)**:	This is a token value that represents the type of content that has the issue. 
* **Custom field (Issue Code)**:	This represents a snippet of code that demonstrates the problem we found. 
* **Custom field (Platform)**:	There may be multiple columns in the CSV file for "Custom field (Platform)". 
* **Custom field (Populations)**:	There may be multiple columns in the CSV file for "Custom field (Populations)". 
* **Custom field (Recommended Code)**:	This represents a snippet of code that demonstrates the recommended code necessary to fix the issue. 
* **Custom field (Reference(s))**:	This is a list of one or more URLs at which you can find out more about the issue and how to fix it.
* **Custom field (Remediation Guidance)**:	This is a prose description of how to fix the issue.
* **Custom field (Severity)**:	This is a token value that represents the severity of the issue. Values will be "Low", "Medium", and "High"
* **Custom field (WCAG Success Criteria)**:	There may be multiple columns in the CSV file for "Custom field (WCAG Success Criteria)". 
* **Custom field (Youtube Video URL)**:	This is a URL for a YouTube video that demonstrates the issue. Note: Tenon only uses this field for legal cases or in audits where videos are explicitly requested by the customer

## Importing the file

### Preparing your import file

To import into GitHub, you need to modify our delivered file needs to be modified a little bit.

#### Base Requirements
1.	Your file must have a header row (our supplied CSV file has one)
2.	The field values in the header row should not have punctuation (our supplied CSV file does have punctuation in the header row)
3.	Values that span multiple lines should be quoted with double quotes (our supplied CSV file will be quoted properly)
4.	Values that have double quotes within them should be escaped with another set of double quotes (our supplied CSV file will have double quotes escaped properly)


#### Modifying the file to concatenate some fields
As noted earlier, some of the fields in the CSV file might have duplicate names. This is because Jira allows for multiple entries in their UI for those fields (i.e. "Component/s"). These **must** be combined into one field using the [CONCATENATE](https://support.office.com/en-gb/article/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d) function in Microsoft Excel.  For instance, to combine the "Component/s" field into one, you might use:

```=CONCATENATE(G2, " ", H2, " ",  I2, " ", J2,  " ", K2, " ", L2, " ", M2)```

The above formula will concatenate all values and add a space between them.  You can also add a delimiter to that formula instead, but you'll have to deal with multiple delimiters in cases where there are blank cells on some rows. (Chances are, some hardcore Excel-Fu can be  )


The final list of fields should number 19 (or)
