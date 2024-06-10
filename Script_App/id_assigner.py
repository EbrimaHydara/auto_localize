import uuid

def assign_ids(content):
    ids = {}
    new_content = content
    for string in re.findall(r'>([^<]+)<', content):
        unique_id = str(uuid.uuid4())
        ids[string] = unique_id
        new_content = new_content.replace(f'>{string}<', f' id="{unique_id}">{string}<')
    return new_content, ids
