import os.path

from giza.tools.files import expand_tree, copy_if_needed

def get_single_html_dir(conf):
    return os.path.join(conf.paths.public_site_output, 'single')

def finalize_single_html_tasks(builder, conf, app):
    pjoin = os.path.join

    single_html_dir = get_single_html_dir(conf)

    if not os.path.exists(single_html_dir):
        os.makedirs(single_html_dir)

    try:
        manual_single_html(input_file=pjoin(conf.paths.branch_output,
                                                    builder, 'contents.html'),
                                   output_file=pjoin(single_html_dir, 'index.html'))
    except (IOError, OSError):
        manual_single_html(input_file=pjoin(conf.paths.branch_output,
                                                    builder, 'index.html'),
                                   output_file=pjoin(single_html_dir, 'index.html'))
    copy_if_needed(source_file=pjoin(conf.paths.branch_output,
                                     builder, 'objects.inv'),
                   target_file=pjoin(single_html_dir, 'objects.inv'))

    single_path = pjoin(single_html_dir, '_static')

    for fn in expand_tree(pjoin(conf.paths.branch_output,
                                builder, '_static'), None):
        task = app.add('task')
        task.job = copy_if_needed
        task.args = [fn, pjoin(single_path, os.path.basename(fn))]
        task.description = "migrating static files to the HTML build"